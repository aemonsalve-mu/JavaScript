// Creamos elemento SVG :
var svg = d3.select("#segment")
.append("svg")
.attr("width", 800)
.attr("height", 200)

// Añadimos la linea con sus atributos :
svg.append ("line")
.attr("x1", 10)
.attr("y1", 10)
.attr("x2", 700)
.attr("y2", 100)
.attr("stroke", "red")
