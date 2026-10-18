{
// Dimensiones de los margenes y la figura.
const margin = {top: 10, right: 30, bottom: 30, left: 40},
width = 800 - margin.left - margin.right,
height = 500 - margin.top - margin.bottom;

// Añadimos el elemento SVG.
const svg = d3
.select("#Area")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
        `translate(${margin.left},${margin.top})`);

// Conseguimos los datos.
d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/1_OneNum.csv").then( function(data) {

  // Escala eje X.
  const x = d3
  .scaleLinear()
    .domain([0, 1000]) // Para el maximo: d3.max(data, function(d) { return +d.price })
    .range([0, width]);
  
  // Mandamos el eje abajo.
  svg.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x));

  // Funcion para crear histograma segun parametros.
  const histogram = d3
  .histogram()
    .value(function(d) { return d.price; })  // El valor de cada uno de los precios.
    .domain(x.domain())  // El dominio de los datos del histograma.
    .thresholds(x.ticks(70)); // El numero de cajas.

  // Aplicamos la funcion para conseguir las cajas.
  const bins = histogram(data);

  // Añadimos eje Y.
  const y = d3
  .scaleLinear()
    .range([height, 0]);
  
  // El dominio de Y tendra que ver con la frecuencia maxima en las cajas.
  y.domain([0, d3.max(bins, function(d) { return d.length; })]);   // d3.hist antes de hacer eje Y.
  
  // Añadimos el eje Y a la izquierda.
  svg
  .append("g")
    .call(d3.axisLeft(y));

  // Añadimos un cambio de color, borde y opacidad.
  const mouseover = function(event,d){
    d3.select(this)
      .transition()
      .duration(500)
      .style("fill", "#b3697a")
      .attr("opacity", 0.85)
      .style("stroke", "#b3697a")
      .style("stroke-width", 2.5)
    }

  const mousemove = function(event,d){
    d3.select(this)
      .transition()
      .duration(1000)
      .style("fill", "#b3697a")
      .attr("opacity", 1)
    }

  const mouseleave = function(event,d){
    d3.select(this)
      .transition()
      .duration(500)
      .attr("opacity", 0.65)
      .style("fill", "#69b3a2")
      .style("stroke", "none")
    }

  // Añadimos barras rectangulares.
  svg
  .selectAll("rect")
    .data(bins)
    .join("rect")
      .attr("x", 1)
      .attr("transform", function(d) { return `translate(${x(d.x0)} , ${y(d.length)})`})
      .attr("width", function(d) { return x(d.x1) - x(d.x0) - 2.5})
      .attr("height", function(d) { return height - y(d.length); })
      .attr("opacity", 0.65)
      .style("fill", "#69b3a2")
      .style("stroke", "none")
      .style("stroke-width", 0)
    .on("mouseover", mouseover)
    .on("mouseleave", mouseleave)
    .on("mousemove", mousemove)
});
}