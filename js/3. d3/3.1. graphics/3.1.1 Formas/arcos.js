// Creamos el elemento SVG :
var svg = d3.select ("#arc")
.append ("svg")
.attr ("width", 1000)
.attr ("height", 400)
// A a d i m o s el arco con sus atributos :
svg.append("path")
.attr("transform", "translate(400,200)")
.attr("d",d3.arc ()
.innerRadius(100)
.outerRadius(150)
.startAngle(3.14) // Radianes , Pi = 3.14 = abajo .
.endAngle ( 6.28 ) 
)// 2* Pi = 6.28 = arriba .
.attr("stroke", "black")
.attr("fill", "#69b3a2");