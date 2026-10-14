// 1. Creamos el elemento SVG dentro del contenedor con id="circle"
var svg = d3.select("#circle")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500);
  

// 2. Añadimos el círculo con sus atributos
svg.append("circle")
  .attr("cx", 300)
  .attr("cy", 300)
  .attr("r", 100)
  .attr("stroke", "black")
  .attr("fill", "#69b3a2")
  