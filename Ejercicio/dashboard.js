// --- CONFIGURACIÓN GLOBAL Y PALETA DE COLORES ---
const margin = { top: 20, right: 120, bottom: 30, left: 50 };
const width = 700 - margin.left - margin.right;
const height = 300 - margin.top - margin.bottom;

const colors = {
  IBEX: "#38bdf8", SANTANDER: "#f43f5e", INDITEX: "#10b981",
  AAPL_Call_230: "#f59e0b", NVDA_Call_130: "#8b5cf6", SPY_Call_580: "#ec4899"
};

let rawData = [];
let correlationData = {};
let isIbexBase100 = true;

// --- CARGA DE DATOS ---
d3.json("financial_data.json").then(data => {
  rawData = data.series.map(d => ({
    ...d,
    dateObj: d3.timeParse("%Y-%m-%d")(d.date)
  }));
  correlationData = data.correlation;

  initDashboard(rawData);
});

function initDashboard(data) {
  renderIBEXChart(data);
  renderOptionsChart(data);
  renderCorrelationHeatmap(correlationData);
  renderVolatilityChart(data);
  renderBrushChart(data);
}

// --- 1. GRÁFICO MULTILÍNEA: IBEX 35 ---
function renderIBEXChart(data) {
  d3.select("#ibex-chart").html("");

  const svg = d3.select("#ibex-chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const x = d3.scaleTime()
    .domain(d3.extent(data, d => d.dateObj))
    .range([0, width]);

  const keys = ["IBEX", "SANTANDER", "INDITEX"];
  const scaleType = isIbexBase100 ? "norm" : "raw";

  const yMin = d3.min(data, d => d3.min(keys, k => d.ibex[scaleType][k]));
  const yMax = d3.max(data, d => d3.max(keys, k => d.ibex[scaleType][k]));

  const y = d3.scaleLinear().domain([yMin * 0.95, yMax * 1.05]).range([height, 0]);

  // Ejes y Cuadrícula
  svg.append("g")
    .attr("class", "grid-line")
    .call(d3.axisLeft(y).tickSize(-width).tickFormat(""));

  svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .attr("class", "axis")
    .call(d3.axisBottom(x).ticks(6));

  svg.append("g")
    .attr("class", "axis")
    .call(d3.axisLeft(y));

  // Trazado de líneas
  keys.forEach(key => {
    const line = d3.line()
      .defined(d => d.ibex[scaleType][key] !== null)
      .x(d => x(d.dateObj))
      .y(d => y(d.ibex[scaleType][key]))
      .curve(d3.curveMonotoneX);

    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", colors[key])
      .attr("stroke-width", 2)
      .attr("d", line);

    // Leyenda lateral
    const lastVal = data[data.length - 1].ibex[scaleType][key];
    if (lastVal) {
      svg.append("text")
        .attr("x", width + 10)
        .attr("y", y(lastVal))
        .attr("fill", colors[key])
        .attr("font-size", "11px")
        .attr("alignment-baseline", "middle")
        .text(`${key} (${lastVal.toFixed(1)})`);
    }
  });
}

function toggleIBEXScale() {
  isIbexBase100 = !isIbexBase100;
  renderIBEXChart(rawData);
}

// --- 2. GRÁFICO MULTILÍNEA: US CALL OPTIONS ---
function renderOptionsChart(data) {
  d3.select("#options-chart").html("");

  const svg = d3.select("#options-chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const x = d3.scaleTime()
    .domain(d3.extent(data, d => d.dateObj))
    .range([0, width]);

  const keys = ["AAPL_Call_230", "NVDA_Call_130", "SPY_Call_580"];

  const yMax = d3.max(data, d => d3.max(keys, k => d.options.raw[k]));
  const y = d3.scaleLinear().domain([0, yMax * 1.1]).range([height, 0]);

  svg.append("g")
    .attr("class", "grid-line")
    .call(d3.axisLeft(y).tickSize(-width).tickFormat(""));

  svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .attr("class", "axis")
    .call(d3.axisBottom(x).ticks(6));

  svg.append("g")
    .attr("class", "axis")
    .call(d3.axisLeft(y));

  keys.forEach(key => {
    const line = d3.line()
      .x(d => x(d.dateObj))
      .y(d => y(d.options.raw[key]))
      .curve(d3.curveMonotoneX);

    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", colors[key])
      .attr("stroke-width", 2)
      .attr("d", line);

    const lastVal = data[data.length - 1].options.raw[key];
    svg.append("text")
      .attr("x", width + 10)
      .attr("y", y(lastVal))
      .attr("fill", colors[key])
      .attr("font-size", "11px")
      .attr("alignment-baseline", "middle")
      .text(`${key} ($${lastVal.toFixed(2)})`);
  });
}

// --- 3. HEATMAP DE CORRELACIÓN ---
function renderCorrelationHeatmap(corrData) {
  d3.select("#correlation-chart").html("");

  const hMargin = { top: 30, right: 30, bottom: 80, left: 80 };
  const hWidth = 500 - hMargin.left - hMargin.right;
  const hHeight = 300 - hMargin.top - hMargin.bottom;

  const svg = d3.select("#correlation-chart")
    .append("svg")
    .attr("width", hWidth + hMargin.left + hMargin.right)
    .attr("height", hHeight + hMargin.top + hMargin.bottom)
    .append("g")
    .attr("transform", `translate(${hMargin.left},${hMargin.top})`);

  const vars = Object.keys(corrData);

  const x = d3.scaleBand().domain(vars).range([0, hWidth]).padding(0.05);
  const y = d3.scaleBand().domain(vars).range([0, hHeight]).padding(0.05);

  const colorScale = d3.scaleSequential()
    .interpolator(d3.interpolateRdBu)
    .domain([1, -1]); // 1: Azul, -1: Rojo

  svg.append("g")
    .attr("transform", `translate(0,${hHeight})`)
    .attr("class", "axis")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "rotate(-45)")
    .style("text-anchor", "end");

  svg.append("g")
    .attr("class", "axis")
    .call(d3.axisLeft(y));

  // Renderizar celdas
  vars.forEach(row => {
    vars.forEach(col => {
      const val = corrData[row][col];
      svg.append("rect")
        .attr("x", x(col))
        .attr("y", y(row))
        .attr("width", x.bandwidth())
        .attr("height", y.bandwidth())
        .style("fill", colorScale(val))
        .append("title")
        .text(`${row} vs ${col}: ${val.toFixed(2)}`);

      // Valor numérico en celda
      svg.append("text")
        .attr("x", x(col) + x.bandwidth() / 2)
        .attr("y", y(row) + y.bandwidth() / 2)
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .attr("fill", Math.abs(val) > 0.5 ? "#fff" : "#000")
        .attr("font-size", "10px")
        .text(val.toFixed(2));
    });
  });
}

// --- 4. GRÁFICO DE VOLATILIDAD MÓVIL ---
function renderVolatilityChart(data) {
  d3.select("#volatility-chart").html("");

  const svg = d3.select("#volatility-chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const x = d3.scaleTime()
    .domain(d3.extent(data, d => d.dateObj))
    .range([0, width]);

  const y = d3.scaleLinear().domain([0, 0.8]).range([height, 0]); // Volatilidad hasta 80%

  svg.append("g")
    .attr("class", "grid-line")
    .call(d3.axisLeft(y).tickSize(-width).tickFormat(""));

  svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .attr("class", "axis")
    .call(d3.axisBottom(x).ticks(6));

  svg.append("g")
    .attr("class", "axis")
    .call(d3.axisLeft(y).tickFormat(d3.format(".0%")));

  const activeKeys = [
    { key: "IBEX", group: "ibex" },
    { key: "AAPL_Call_230", group: "options" }
  ];

  activeKeys.forEach(item => {
    const line = d3.line()
      .defined(d => d[item.group].volatility[item.key] !== null)
      .x(d => x(d.dateObj))
      .y(d => y(d[item.group].volatility[item.key]))
      .curve(d3.curveMonotoneX);

    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", colors[item.key])
      .attr("stroke-dasharray", item.group === "options" ? "4,4" : "0")
      .attr("stroke-width", 2)
      .attr("d", line);
  });
}

// --- 5. FILTRO TEMPORAL BRUSH ---
function renderBrushChart(data) {
  d3.select("#brush-chart").html("");

  const bHeight = 80;
  const svg = d3.select("#brush-chart")
    .append("svg")
    .attr("width", (width * 2) + margin.left + margin.right)
    .attr("height", bHeight + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  const x = d3.scaleTime()
    .domain(d3.extent(data, d => d.dateObj))
    .range([0, (width * 2) + margin.right]);

  const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.ibex.norm.IBEX)])
    .range([bHeight, 0]);

  const area = d3.area()
    .x(d => x(d.dateObj))
    .y0(bHeight)
    .y1(d => y(d.ibex.norm.IBEX));

  svg.append("path")
    .datum(data)
    .attr("fill", "#0284c7")
    .attr("opacity", 0.4)
    .attr("d", area);

  svg.append("g")
    .attr("transform", `translate(0,${bHeight})`)
    .attr("class", "axis")
    .call(d3.axisBottom(x));

  const brush = d3.brushX()
    .extent([[0, 0], [(width * 2) + margin.right, bHeight]])
    .on("brush end", brushed);

  svg.append("g")
    .attr("class", "brush")
    .call(brush);

  function brushed(event) {
    if (!event.selection) return;
    const [x0, x1] = event.selection.map(x.invert);
    const filteredData = data.filter(d => d.dateObj >= x0 && d.dateObj <= x1);
    
    // Actualizar gráficos dinámicamente
    renderIBEXChart(filteredData);
    renderOptionsChart(filteredData);
    renderVolatilityChart(filteredData);
  }
}