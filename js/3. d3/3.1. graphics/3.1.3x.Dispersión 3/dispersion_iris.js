{
  // Especificamos los margenes y dimensiones del grafico.
  var margin = {top: 10, right: 50, bottom: 40, left: 50},
  width = 650 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

  // Añadimos el objeto SVG al elemento DIV.
  var svg_area = d3
  .select("#Area")
    .append("svg")
      .attr("width", width + margin.left + margin.right) // Recuperamos anchura original.
      .attr("height", height + margin.top + margin.bottom) // Recuperamos altura original.
      // Si queremos hacerlo responsivo.
      //.attr('viewBox', `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)

  // Movemos el elemento SVG para tener algo de margen.
  // Tenemos que agruparlo todo mediante "g" antes de hacer la translacion.
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Eje X y escala
  var x = d3
  .scaleLinear()
    .domain([4, 8]) // Minimo y maximo de los datos.
    .range([0, width]); // Minimo y maximo en pixeles (0, anchura).
  
  // Añadimos el eje X y los llevamos abajo (altura).
  svg_area
  .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Eje Y y escala.
  var y = d3
  .scaleLinear()
    .domain([0, 9]) // Minimo y maximo de los datos.
    .range([height, 0]); // Minimo y maximo en pixeles (0, altura).
  
  // Añadimos el eje Y.
  svg_area
  .append('g')
    .call(d3.axisLeft(y));

  // Añadimos titulo al eje X.
  svg_area
  .append("text")
    .attr("text-anchor", "middle")
    .attr("x", width / 2)
    .attr("y", height + margin.top + 25)
    .text("Eje X")
      .style("font-family", "sans-serif");

  // Añadimos titulo al eje Y.
  svg_area
  .append("text")
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90)")
    .attr("y", -30)
    .attr("x", -height / 2)
    .text("Eje Y")
      .style("font-family", "sans-serif");

  // Escala de colores.
  const color = d3
  .scaleOrdinal()
    .domain(["setosa", "versicolor", "virginica"])
    .range(["#440154ff", "#21908dff", "#fde725ff"])

  // Datos.
  d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/iris.csv")
    .then(function(data){
      svg_area
      .append("g")
      .selectAll("dot")
      .data(data)
      .join("circle")
        .attr("cx", function (d) {return x(d.Sepal_Length)})
        .attr("cy", function (d) {return y(d.Petal_Length)})
        .attr("r", 5)
        .attr("opacity", 0.75)
        .style("fill", function (d) {return color(d.Species)})     
        
        // Al pasar el raton.
        .on("mouseover", function(event, d) {
          d3.select(this)
          .transition()
            .duration(200)
            .attr("opacity", 1)
            .attr("r", 10);
          }) 
        
        // Al dejar el punto.
        .on("mouseout", function(event, d){
          d3.select(this)
          .transition()
            .duration(200)
            .attr("opacity", 0.75)
            .attr("r", 5)
        })
        
        // Al clickar.
        .on("click", function(event, d){
          d3.select(this)
          .transition()
            .duration(500)
            .style("fill", "red")
        })
    })
}