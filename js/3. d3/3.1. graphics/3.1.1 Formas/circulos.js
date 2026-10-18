// 1. Creamos el elemento SVG dentro del contenedor con id="circle"
var svg = d3.select("#circle")
  .append("svg")
  .attr("width", 200)
  .attr("height", 200);
  

// 2. Añadimos el círculo con sus atributos
svg.append("circle")
  .attr("cx", 50)
  .attr("cy", 50)
  .attr("r", 10)
  .attr("stroke", "black")
  .attr("fill", "#7a69b3")
  