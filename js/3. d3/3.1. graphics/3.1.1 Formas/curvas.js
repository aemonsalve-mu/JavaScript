// Creamos datos sinteticos
var data = [{x: 0, y: 20}, { x: 150, y: 150}, {x: 300, y: 100 },
{x: 450, y: 20}, {x: 600, y: 130}]

// Creamos el elemento SVG :
var svg = d3.select("#curve")
    .append("svg")
    .attr("width", 800)
    .attr("height", 200)

// Utilizamos la función line de d3:
var curveFunc = d3.line()
.curve(d3.curveBasis) // Definimos el tipo de curva , probad
    .x(function(d){return d.x})
    .y(function(d){return d.y})
// Le damos atributos a la línea que hemos creado :
svg.append("path")
.attr("d", curveFunc(data))
.attr("stroke", "black")
.attr("fill", "none");
