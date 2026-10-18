// Creamos datos s i n t t i c o s :
var data = [{x: 0, y: 20} , {x: 150 , y: 150} , {x: 300 , y: 100} , {x:450 , y: 20} , {x: 600 , y: 130}]
// Creamos el elemento SVG :
var svg = d3.select("#line")
.append("svg")
.attr("width", 800)
.attr("height", 200)

 // Utilizamos la f u n c i n line de d3:
 var lineFunc = d3
 .line()
 .x(function(d){return d.x})
 .y(function(d){return d.y})

// Le damos atributos a la l n e a que hemos creado :
svg.append("path")
.attr("d", lineFunc(data))
.attr("stroke", "black")
.attr("fill", "none");
