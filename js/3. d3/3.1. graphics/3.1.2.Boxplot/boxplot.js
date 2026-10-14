// BOXPLOT

{
// Dimensiones y margenes del grafico.
var margin = {top: 10, right: 30, bottom: 30, left: 40},
width = 400 - margin.left - margin.right,
height = 400 - margin.top - margin.bottom;

// Añadimos el elemento SVG al DIV.
var svg = d3.select("#Area")
.append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
// Movemos todo el SVG para aplicar los margenes.
.append("g")
.attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");

// Creamos datos sinteticos para el boxplot.
var data = [12,19,11,13,12,22,13,4,15,16,18,19,20,12,11,9]

// Calculamos medidas estadisticas.
var data_sorted = data.sort(d3.ascending) // Orden ascendente.
var q1 = d3.quantile(data_sorted, .25) // Q1.
var median = d3.quantile(data_sorted, .5) // Q2 = Mediana.
var q3 = d3.quantile(data_sorted, .75) // Q3
var interQuantileRange = q3 - q1 // IQR.
var min = q1 - 1.5 * interQuantileRange // Valla inferior.
var max = q1 + 1.5 * interQuantileRange // Valla superior.

// Creamos el eje Y.
var y = d3.scaleLinear()
.domain([0,24])
.range([height, 0]);
svg.call(d3.axisLeft(y))


// Características de la caja.
var center = 200 // Posicion del centro en el eje X.
var width = 100 // Anchura de la caja.

// Añadimos las lineas verticales.
svg
.append("line")
.attr("x1", center)
.attr("x2", center)
.attr("y1", y(min) )
.attr("y2", y(max) )
.attr("stroke", "black")

// Añadimos la caja.
svg
.append("rect")
.attr("x", center - width/2)
.attr("y", y(q3) )
.attr("height", (y(q1)-y(q3)) )
.attr("width", width )
.attr("stroke", "black")
.style("fill", "#69b3a2")

// Añadimos la mediana y las lineas horizontales.
svg
.selectAll("toto")
.data([min, median, max])
.enter()
.append("line")
.attr("x1", center-width/2)
.attr("x2", center+width/2)
.attr("y1", function(d){ return(y(d))} )
.attr("y2", function(d){ return(y(d))} )
.attr("stroke", "black")
}


// https://d3-graph-gallery.com/graph/boxplot_show_individual_points.html
// https://observablehq.com/@d3/box-plot/2
