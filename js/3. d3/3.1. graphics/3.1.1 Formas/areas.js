 // Creamos datos s i n t t i c o s :
var data = [{x: 0, y: 20},{x: 150 , y: 150},{x: 300 , y: 100}, 
    {x: 450, y: 20},{x: 600 , y: 130}]
// Creamos el elemento SVG :
var svg = d3.select("#area")
.append ("svg")
.attr("width", 800)
.attr("heiht", 200)

// Utilizamos la f u n c i n area de d3:
var curveFunc = d3.area()
.x(function(d){return d.x}) // Posicion de los limites en el eje x
.y1(function(d){return d.y}) // Posicion del limite superior en el eje Y.
.y0(200) // Posicion del limite inferior en el eje Y.
// Le damos atributos al rea que hemos creado :
svg.append("path")
.attr("d", curveFunc(data))
.attr("stroke", "black")
.attr("fill", "#69b3a2");