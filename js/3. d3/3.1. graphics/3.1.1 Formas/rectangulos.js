// Creamos elemento SVG :
var svg = d3.select ("#rect")
.append ("svg")
.attr ("width", 800)
.attr ("height", 200)

// Añadimos el rectangulo con atributos :
svg.append ("rect")
.attr ("x", 20)
.attr ("y", 100)
.attr ("width", 600)
.attr ("height", 40)
.attr ("stroke","black")
.attr ("fill", "#69a3b2");