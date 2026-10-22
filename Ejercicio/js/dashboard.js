 const colors = {
      IBEX: "#38bdf8", SANTANDER: "#f43f5e", INDITEX: "#10b981",
      AAPL_Call_230: "#f59e0b", NVDA_Call_130: "#8b5cf6", SPY_Call_580: "#ec4899"
    };

    let rawData = [];
    let correlationData = {};
    let isIbexBase100 = true;

    const margin = { top: 20, right: 110, bottom: 30, left: 50 };
    const width = 600 - margin.left - margin.right;
    const height = 260 - margin.top - margin.bottom;

    function initDashboard(payload) {
      rawData = payload.series.map(d => ({
        ...d,
        dateObj: d3.timeParse("%Y-%m-%d")(d.date)
      })).filter(d => d.dateObj !== null);

      correlationData = payload.correlation;

      d3.select("#status")
        .style("color", "#10b981")
        .text("✓ Datos cargados e inicializados correctamente");

      renderIBEXChart(rawData);
      renderOptionsChart(rawData);
      renderCorrelationHeatmap(correlationData);
      renderVolatilityChart(rawData);
      renderBrushChart(rawData);
    }

    // 1. GRÁFICO IBEX 35
    function renderIBEXChart(data) {
      d3.select("#ibex-chart").html("");
      const keys = ["IBEX", "SANTANDER", "INDITEX"];
      const scaleType = isIbexBase100 ? "norm" : "raw";

      const svg = d3.select("#ibex-chart")
        .append("svg")
        .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      const x = d3.scaleTime()
        .domain(d3.extent(data, d => d.dateObj))
        .range([0, width]);

      const allVals = data.flatMap(d => keys.map(k => d.ibex[scaleType][k])).filter(v => v !== null && !isNaN(v));
      if (allVals.length === 0) return;

      const y = d3.scaleLinear()
        .domain([d3.min(allVals) * 0.95, d3.max(allVals) * 1.05])
        .range([height, 0]);

      svg.append("g").attr("class", "grid-line").call(d3.axisLeft(y).tickSize(-width).tickFormat(""));
      svg.append("g").attr("transform", `translate(0,${height})`).attr("class", "axis").call(d3.axisBottom(x).ticks(5));
      svg.append("g").attr("class", "axis").call(d3.axisLeft(y));

      keys.forEach(key => {
        const line = d3.line()
          .defined(d => d.ibex[scaleType][key] !== null)
          .x(d => x(d.dateObj))
          .y(d => y(d.ibex[scaleType][key]))
          .curve(d3.curveMonotoneX);

        svg.append("path")
          .datum(data)
          .attr("fill", "none")
          .attr("stroke", colors[key] || "#fff")
          .attr("stroke-width", 2)
          .attr("d", line);

        const validData = data.filter(d => d.ibex[scaleType][key] !== null);
        if (validData.length > 0) {
          const lastVal = validData[validData.length - 1].ibex[scaleType][key];
          svg.append("text")
            .attr("x", width + 8)
            .attr("y", y(lastVal))
            .attr("fill", colors[key] || "#fff")
            .attr("font-size", "11px")
            .attr("alignment-baseline", "middle")
            .text(`${key} (${lastVal.toFixed(1)})`);
        }
      });
    }

    // 2. GRÁFICO OPIONES CALL USA
    function renderOptionsChart(data) {
      d3.select("#options-chart").html("");
      const keys = ["AAPL_Call_230", "NVDA_Call_130", "SPY_Call_580"];

      const svg = d3.select("#options-chart")
        .append("svg")
        .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      const x = d3.scaleTime()
        .domain(d3.extent(data, d => d.dateObj))
        .range([0, width]);

      const allVals = data.flatMap(d => keys.map(k => d.options.raw[k])).filter(v => v !== null && !isNaN(v));
      if (allVals.length === 0) return;

      const y = d3.scaleLinear()
        .domain([0, d3.max(allVals) * 1.1])
        .range([height, 0]);

      svg.append("g").attr("class", "grid-line").call(d3.axisLeft(y).tickSize(-width).tickFormat(""));
      svg.append("g").attr("transform", `translate(0,${height})`).attr("class", "axis").call(d3.axisBottom(x).ticks(5));
      svg.append("g").attr("class", "axis").call(d3.axisLeft(y));

      keys.forEach(key => {
        const line = d3.line()
          .defined(d => d.options.raw[key] !== null)
          .x(d => x(d.dateObj))
          .y(d => y(d.options.raw[key]))
          .curve(d3.curveMonotoneX);

        svg.append("path")
          .datum(data)
          .attr("fill", "none")
          .attr("stroke", colors[key] || "#fff")
          .attr("stroke-width", 2)
          .attr("d", line);

        const validData = data.filter(d => d.options.raw[key] !== null);
        if (validData.length > 0) {
          const lastVal = validData[validData.length - 1].options.raw[key];
          svg.append("text")
            .attr("x", width + 8)
            .attr("y", y(lastVal))
            .attr("fill", colors[key] || "#fff")
            .attr("font-size", "11px")
            .attr("alignment-baseline", "middle")
            .text(`${key} ($${lastVal.toFixed(1)})`);
        }
      });
    }

    // 3. HEATMAP CORRELACIÓN
    function renderCorrelationHeatmap(corrData) {
      d3.select("#correlation-chart").html("");
      if (!corrData) return;

      const hMargin = { top: 20, right: 20, bottom: 60, left: 90 };
      const hWidth = 600 - hMargin.left - hMargin.right;
      const hHeight = 260 - hMargin.top - hMargin.bottom;

      const svg = d3.select("#correlation-chart")
        .append("svg")
        .attr("viewBox", `0 0 ${hWidth + hMargin.left + hMargin.right} ${hHeight + hMargin.top + hMargin.bottom}`)
        .append("g")
        .attr("transform", `translate(${hMargin.left},${hMargin.top})`);

      const vars = Object.keys(corrData);
      const x = d3.scaleBand().domain(vars).range([0, hWidth]).padding(0.05);
      const y = d3.scaleBand().domain(vars).range([0, hHeight]).padding(0.05);

      const colorScale = d3.scaleSequential().interpolator(d3.interpolateRdBu).domain([1, -1]);

      svg.append("g")
        .attr("transform", `translate(0,${hHeight})`)
        .attr("class", "axis")
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "rotate(-30)")
        .style("text-anchor", "end");

      svg.append("g").attr("class", "axis").call(d3.axisLeft(y));

      vars.forEach(row => {
        vars.forEach(col => {
          const val = corrData[row][col];
          svg.append("rect")
            .attr("x", x(col))
            .attr("y", y(row))
            .attr("width", x.bandwidth())
            .attr("height", y.bandwidth())
            .style("fill", colorScale(val));

          svg.append("text")
            .attr("x", x(col) + x.bandwidth() / 2)
            .attr("y", y(row) + y.bandwidth() / 2)
            .attr("text-anchor", "middle")
            .attr("alignment-baseline", "middle")
            .attr("fill", Math.abs(val) > 0.5 ? "#fff" : "#000")
            .attr("font-size", "10px")
            .text(val !== undefined ? val.toFixed(2) : "0.00");
        });
      });
    }

    // 4. VOLATILIDAD MÓVIL
    function renderVolatilityChart(data) {
      d3.select("#volatility-chart").html("");

      const svg = d3.select("#volatility-chart")
        .append("svg")
        .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      const x = d3.scaleTime()
        .domain(d3.extent(data, d => d.dateObj))
        .range([0, width]);

      const activeKeys = [
        { key: "IBEX", group: "ibex" },
        { key: "AAPL_Call_230", group: "options" }
      ];

      const allVals = data.flatMap(d => activeKeys.map(k => d[k.group].volatility[k.key]))
        .filter(v => v !== null && !isNaN(v));

      const yMax = allVals.length > 0 ? d3.max(allVals) * 1.1 : 1;
      const y = d3.scaleLinear().domain([0, yMax]).range([height, 0]);

      svg.append("g").attr("class", "grid-line").call(d3.axisLeft(y).tickSize(-width).tickFormat(""));
      svg.append("g").attr("transform", `translate(0,${height})`).attr("class", "axis").call(d3.axisBottom(x).ticks(5));
      svg.append("g").attr("class", "axis").call(d3.axisLeft(y).tickFormat(d3.format(".0%")));

      activeKeys.forEach(item => {
        const line = d3.line()
          .defined(d => d[item.group].volatility[item.key] !== null)
          .x(d => x(d.dateObj))
          .y(d => y(d[item.group].volatility[item.key]))
          .curve(d3.curveMonotoneX);

        svg.append("path")
          .datum(data)
          .attr("fill", "none")
          .attr("stroke", colors[item.key] || "#fff")
          .attr("stroke-dasharray", item.group === "options" ? "4,4" : "0")
          .attr("stroke-width", 2)
          .attr("d", line);
      });
    }

    // 5. BRUSH INTERACTIVO
    function renderBrushChart(data) {
      d3.select("#brush-chart").html("");

      const bHeight = 70;
      const bWidth = (width * 2) + margin.left + margin.right - 80;

      const svg = d3.select("#brush-chart")
        .append("svg")
        .attr("viewBox", `0 0 ${bWidth + margin.left + margin.right} ${bHeight + margin.top + margin.bottom}`)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      const x = d3.scaleTime()
        .domain(d3.extent(data, d => d.dateObj))
        .range([0, bWidth]);

      const vals = data.map(d => d.ibex.norm.IBEX).filter(v => v !== null);
      const y = d3.scaleLinear().domain([0, d3.max(vals) || 100]).range([bHeight, 0]);

      const area = d3.area()
        .defined(d => d.ibex.norm.IBEX !== null)
        .x(d => x(d.dateObj))
        .y0(bHeight)
        .y1(d => y(d.ibex.norm.IBEX));

      svg.append("path")
        .datum(data)
        .attr("fill", "#0284c7")
        .attr("opacity", 0.4)
        .attr("d", area);

      svg.append("g").attr("transform", `translate(0,${bHeight})`).attr("class", "axis").call(d3.axisBottom(x));

      const brush = d3.brushX()
        .extent([[0, 0], [bWidth, bHeight]])
        .on("brush end", (event) => {
          if (!event.selection) return;
          const [x0, x1] = event.selection.map(x.invert);
          const filtered = data.filter(d => d.dateObj >= x0 && d.dateObj <= x1);
          if (filtered.length > 0) {
            renderIBEXChart(filtered);
            renderOptionsChart(filtered);
            renderVolatilityChart(filtered);
          }
        });

      svg.append("g").attr("class", "brush").call(brush);
    }

    // INTENTO DE LECTURA VÍA FETCH
    d3.json("financial_data.json")
      .then(initDashboard)
      .catch(() => {
        d3.select("#status")
          .style("color", "#f43f5e")
          .text("Bloqueo de explorador (CORS) o archivo no hallado. Selecciona 'financial_data.json' con el botón de la izquierda.");
      });

    // LECTURA MANUAL MEDIANTE INPUT FILE
    document.getElementById('file-picker').addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function(evt) {
        try {
          const parsed = JSON.parse(evt.target.result);
          initDashboard(parsed);
        } catch(err) {
          alert("El archivo seleccionado no coincide con el formato JSON esperado.");
        }
      };
      reader.readAsText(file);
    });

    // BOTÓN DE TOGGLE DE ESCALA
    document.getElementById('btn-toggle-scale').addEventListener('click', () => {
      isIbexBase100 = !isIbexBase100;
      renderIBEXChart(rawData);
    });