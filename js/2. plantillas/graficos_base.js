// Comprobamos si D3 está disponible antes de intentar dibujar el gráfico.

if (typeof d3 === "undefined") {
    document.getElementById("estado").textContent =
        "El gráfico no se puede dibujar porque D3 no está disponible.";
    console.error("No se pudo dibujar el gráfico: D3 no está disponible.");
} else {

    // Especificamos los margenes y dimensiones del grafico.
    var margin = {top: 10, right: 50, bottom: 40, left: 50},
    width = 650 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

    // Añadimos el objeto SVG al elemento DIV.
    var svg_area = d3
    .select("#Area")
      .append("svg")
        // .attr("width", width + margin.left + margin.right) // Recuperamos anchura original.
        // .attr("height", height + margin.top + margin.bottom) // Recuperamos altura original.
        // Si queremos hacerlo responsivo.
        .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
        .attr("role", "img")
        .attr("aria-label", "Gráfico de dispersión de ejemplo")

    // Movemos el elemento SVG para tener algo de margen.
    // Tenemos que agruparlo todo mediante "g" antes de hacer la translacion.
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Eje X y escala
    var x = d3
    .scaleLinear()
      .domain([0, 100]) // Minimo y maximo de los datos.
      .range([0, width]); // Minimo y maximo en pixeles (0, anchura).
    
    // Añadimos el eje X y los llevamos abajo (altura).
    svg_area
    .append('g')
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // Eje Y y escala.
    var y = d3
    .scaleLinear()
      .domain([0, 100]) // Minimo y maximo de los datos.
      .range([height, 0]); // Minimo y maximo en pixeles (0, altura).
    
    // Añadimos el eje Y.
    svg_area
    .append('g')
      .call(d3.axisLeft(y));

    // Añadimos titulo al eje X
    svg_area
    .append("text")
      .attr("text-anchor", "middle")
      .attr("x", width / 2)
      .attr("y", height + margin.top + 25)
      .text("Eje X")
        .style("font-family", "sans-serif");

    // Añadimos titulo al eje Y
    svg_area
    .append("text")
      .attr("text-anchor", "middle")
      .attr("transform", "rotate(-90)")
      .attr("y", -30)
      .attr("x", -height / 2)
      .text("Eje Y")
        .style("font-family", "sans-serif");


// Datos

    // Elementos graficos.    
        

    /* Datos de ejemplo (valores entre 0 y 100, como indican los dominios).
     var datos = [
        {x: 15, y: 25},
        {x: 30, y: 70},
        {x: 50, y: 45},
        {x: 72, y: 82},
        {x: 90, y: 35}
    ];

    // Elementos gráficos: puntos del diagrama de dispersión.
    svg_area
    .selectAll("circle")
    .data(datos)
    .enter()
    .append("circle")
      .attr("cx", function(d) { return x(d.x); })
      .attr("cy", function(d) { return y(d.y); })
      .attr("r", 5)
      .attr("fill", "steelblue");
      */

}
