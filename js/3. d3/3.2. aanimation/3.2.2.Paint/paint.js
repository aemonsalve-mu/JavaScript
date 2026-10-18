{
// Dimensiones de los margenes y la figura.
const margin = {top: 100, right: 100, bottom: 100, left: 100},
width = 1000 - margin.left - margin.right,
height = 600 - margin.top - margin.bottom;

// Añadimos el elemento SVG.
const svg_area = d3
.select("#Area")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  // Movemos el area segun los margenes.
  .append("g")
  .attr("transform",
        `translate(${margin.left},${margin.top})`);

// Creamos una funcion para pintar con puntos.
const pintarPuntos = function(event, id){
  
  let position = d3.pointer(event, this) // Posicion del raton en el lienzo
  console.log(position)

  svg_area
  .append("circle")
    .attr("fill", `${colorActual}`)
    .attr("r", 2)
    .attr("cx", position[0])
    .attr("cy", position[1]);
}

// Añadimos un rectangulo como lienzo.
const lienzo = svg_area
  .append("path")
    .attr("id", "canvasPaint")
    .attr("d", `M0,0 L${height},0 L${height},${height} L0,${height} Z`) // Lo hacemos cuadrado.
    .attr("stroke", "black")
    .attr("stroke-width", "3px")
    .attr("fill", "white")
    .on("mousemove", pintarPuntos)

// Añadimos un cuadro selector de colores.
const control = svg_area
  .append("path")
    .attr("id", "controlPaint")
    .attr("d", `M${height + 50},${height/2 - 75} L${height + 100},${height/2 - 75} L${height + 100},${height/2 + 75} L${height + 50},${height/2 + 75} Z`) // Lo hacemos cuadrado.
    .attr("stroke", "black")
    .attr("stroke-width", "3px")
    .attr("fill", "white")

// Programamos el cambio de color clickando botones.
const pulsarRojo = function(){
  colorActual = "red"

  d3.select("#botonRojo")
  .transition()
  .duration(200)
  .attr("stroke", "black")
  .style("opacity", 1)

  d3.select("#botonVerde")
  .transition()
  .duration(200)
  .attr("stroke", "none")
  .style("opacity", 0.5)

  d3.select("#botonAzul")
  .transition()
  .duration(200)
  .attr("stroke", "none")
  .style("opacity", 0.5)
} 

const pulsarVerde = function(){
  colorActual = "green"

  d3.select("#botonRojo")
  .transition()
  .duration(200)
  .attr("stroke", "none")
  .style("opacity", 0.5)

  d3.select("#botonVerde")
  .transition()
  .duration(200)
  .attr("stroke", "black")
  .style("opacity", 1)

  d3.select("#botonAzul")
  .transition()
  .duration(200)
  .attr("stroke", "none")
  .style("opacity", 0.5)
} 

const pulsarAzul = function(){
  colorActual = "blue"

  d3.select("#botonRojo")
  .transition()
  .duration(200)
  .attr("stroke", "none")
  .style("opacity", 0.5)

  d3.select("#botonVerde")
  .transition()
  .duration(200)
  .attr("stroke", "none")
  .style("opacity", 0.5)

  d3.select("#botonAzul")
  .transition()
  .duration(200)
  .attr("stroke", "black")
  .style("opacity", 1)
} 

colorActual = "none";

// Añadimos puntos de colores al control.
const botonRojo = svg_area
.append("circle")
  .attr("id", "botonRojo")
  .attr("fill", "red")
  .attr("r", 10)
  .attr("cx", height + 75)
  .attr("cy", (height/2 - 75) + 1 * (75 * 2) / 4)
  .attr("stroke", "none")
  .attr("stroke-width", "3px")
  .style("opacity", 0.5)
  .on("click", pulsarRojo)

const botonVerde = svg_area
.append("circle")
  .attr("id", "botonVerde")
  .attr("fill", "green")
  .attr("r", 10)
  .attr("cx", height + 75)
  .attr("cy", (height/2 - 75) + 2 * (75 * 2) / 4)
  .attr("stroke", "none")
  .attr("stroke-width", "3px")
  .style("opacity", 0.5)
  .on("click", pulsarVerde)

const botonAzul = svg_area
.append("circle")
  .attr("id", "botonAzul")
  .attr("fill", "blue")
  .attr("r", 10)
  .attr("cx", height + 75)
  .attr("cy", (height/2 - 75) + 3 * (75 * 2) / 4)
  .attr("stroke", "none")
  .attr("stroke-width", "3px")
  .style("opacity", 0.5)
  .on("click", pulsarAzul)
}