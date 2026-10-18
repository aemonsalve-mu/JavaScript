{
  // Especificamos los margenes y dimensiones del grafico.
  var margin = {top: 80, right: 50, bottom: 40, left: 50},
  width = 500 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;
  
  // Añadimos el objeto SVG al elemento DIV.
  var svg_area = d3
  .select("#Area")
      .append("svg")
      .attr("width", width + margin.left + margin.right) // Recuperamos anchura original.
      .attr("height", height + margin.top + margin.bottom) // Recuperamos altura original.
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);
  
  // Datos.
  d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/heatmap_data.csv")
  .then(function(data){
  
      // Etiquetas para filas y columnas.
      const misGrupos = Array.from(new Set(data.map(d => d.group)))
      const misVars = Array.from(new Set(data.map(d => d.variable)))
  
      // Escala en eje X.
      const x = d3
      .scaleBand()
        .domain(misGrupos)
        .range([0, width])
        .padding(0.1); // Margen entre las bandas.
  
      svg_area
      .append("g")
        .attr("transform", "translate(0 , " + height + ")")
        .call(d3.axisBottom(x))
        .select(".domain").remove()
  
      // Escala en eje Y.
      const y = d3
      .scaleBand()
        .domain(misVars)
        .range([height, 0])
        .padding(0.1) // Margen entre bandas.
  
      svg_area
      .append("g")
      .call(d3.axisLeft(y))
      .attr("transform", "translate(" + (width + 25) + ", 0)")
      .select(".domain").remove()
      
      // Escala de colores
      const color = d3
      .scaleSequential()
      .interpolator(d3.interpolateInferno)
      .domain([1, 100])
  
      // Mouseover.
      const mouseover = function(event, d) {
        d3.select(this)
        .transition()
        .duration(500)
        .style("opacity", 1)
        .style("stroke", "black")
      }
  
      // Mouseleave.
      const mouseleave = function (d, event) {
        d3.select(this)
        .transition()
        .duration(200)
        .style("opacity", 0.6)
        .style("stroke", "none")
      }
  
      // Añadimos los rectangulos.
      svg_area
      .selectAll()
      .data(data, function(d) {return d.group + ":" + d.variable})
      .join("rect")
        .attr("x", function(d) {return x(d.group)})
        .attr("y", function(d) {return y(d.variable)})
        .attr("rx", 8)
        .attr("ry", 8)
        .attr("width", x.bandwidth() )
        .attr("height", y.bandwidth() )
        .style("fill", function(d){return color(d.value)})
        .style("stroke", "none")
        .style("stroke-width", 3)
        .style("opacity", 0.6)
        .on("mouseover", mouseover)
        .on("mouseleave", mouseleave)
  })

// Titulo.
svg_area.append("text")
.attr("x", 0)
.attr("y", -50)
.attr("text-anchor", "left")
.style("font-size", "22px")
.text("Heatmap");

// Subtitulo.
svg_area.append("text")
.attr("x", 0)
.attr("y", -20)
.attr("text-anchor", "left")
.style("font-size", "14px")
.style("fill", "grey")
.style("max-width", 400)
.text("Mapa de calor realizado con D3.js.");
}