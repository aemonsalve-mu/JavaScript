{
// Dimensiones de los margenes y la figura.
const margin = {top: 100, right: 100, bottom: 100, left: 100},
width = 1200 - margin.left - margin.right,
height = 900 - margin.top - margin.bottom;

// Añadimos el elemento SVG.
const svg_area = d3
.select("#Area")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .style("background-image", "url(./galaxia.JPG)")
  .style("background-size", `${width + margin.left + margin.right}px ${height + margin.top + margin.bottom}px`)

  // Movemos el area segun los margenes.
  .append("g")
  .attr("transform",
        `translate(${margin.left},${margin.top})`);

  // Al clickar, queremos que los puntos entren en orbita en torno al centro.
  const mandarOrbita = function () {

    // Posicion X e Y para mandarlos al mismo punto, con altura random segun offset.
    var offset_y = 100 + Math.floor((Math.random()*200))
    var pos_x = width/2 - d3.select(this).attr("cx")
    var pos_y = height/2 - d3.select(this).attr("cy") - offset_y

    // Mandamos el circulo al punto de partida.
    d3.select(this)
    .transition()
    .duration(500)
    .attr("transform", `translate(${pos_x}, ${pos_y})`)

    // Le damos un color aleatorio.
    var listaColores = ["#0cb323", "#d6cd1a", "#273cc4", "#c44927", "#20c994"]

    // Funcion random.
    function get_random (list) {
      return list[Math.floor((Math.random() * list.length))];
    }

    // Aplicamos el color aleatorio.
    d3.select(this)
    .style("fill", get_random(listaColores))

    // Añadimos una clase para distintas velocidades.
    var listaVelocidades = ["Vel-1", "Vel-2", "Vel-3"]

    // Le damos un nivel de velocidad aleatorio al planeta.
    d3.select(this)
    .attr("id", get_random(listaVelocidades))
  }

  // Inicializamos la variable de rotacion general.
  var rotation = 0;

  // Creamos una funcion para que los circulos con ID Planeta orbiten sin parar.
  const orbitaInfinita_1 = function () {

    rotation += 10;

    // Animacion inicial.
    var duration_base = 1000

    // Velocidad 1
    d3.selectAll("#Vel-1")
    .transition()
    .ease(d3.easeLinear)
    .duration(duration_base)
    .attr("r", 14)
    .style("opacity", 0.75)
    .attr("transform-origin", `${width / 2} ${height / 2}`)
    .attr("transform", `rotate(${rotation})`)
    
    // Velocidad 2
    d3.selectAll("#Vel-2")
    .transition()
    .ease(d3.easeLinear)
    .duration(duration_base)
    .attr("r", 20)
    .style("opacity", 0.75)
    .attr("transform-origin", `${width / 2} ${height / 2}`)
    .attr("transform", `rotate(${rotation * 1.5})`)

    // Velocidad 3
    d3.selectAll("#Vel-3")
    .transition()
    .ease(d3.easeLinear)
    .duration(duration_base)
    .attr("r", 26)
    .style("opacity", 0.75)
    .attr("transform-origin", `${width / 2} ${height / 2}`)
    .attr("transform", `rotate(${rotation * 2})`)

    // Al terminar, vamos a la segunda parte.
    d3.transition()
    .duration(duration_base)
    .on("end", orbitaInfinita_2)

  }

  const orbitaInfinita_2 = function () {

    rotation += 10;
    
    // Animacion de regreso.
    var duration_base = 1000
    
    // Velocidad 1
    d3.selectAll("#Vel-1")
    .transition()
    .ease(d3.easeLinear)
    .duration(duration_base)
    .attr("r", 8)
    .style("opacity", 1)
    .attr("transform", `rotate(${rotation})`)
    .attr("transform-origin", `${width / 2} ${height / 2}`)

    // Velocidad 2
    d3.selectAll("#Vel-2")
    .transition()
    .ease(d3.easeLinear)
    .duration(duration_base)
    .attr("r", 14)
    .style("opacity", 1)
    .attr("transform", `rotate(${rotation * 1.5})`)
    .attr("transform-origin", `${width / 2} ${height / 2}`)

    // Velocidad 3
    d3.selectAll("#Vel-3")
    .transition()
    .ease(d3.easeLinear)
    .duration(duration_base)
    .attr("r", 20)
    .style("opacity", 1)
    .attr("transform", `rotate(${rotation * 2})`)
    .attr("transform-origin", `${width / 2} ${height / 2}`)

    // Al terminar, volvemos a la primera parte.
    d3.transition()
    .duration(duration_base)
    .on("end", orbitaInfinita_1)
  }

  // Creamos una funcion para añadir circulos.
  const crearCirculo = function (cx, cy, r) {
    svg_area
      .append("circle")
        .attr("cx", cx)
        .attr("cy", cy)
        .attr("r", r)
        .style("fill", "white")
        .style("stroke", "none")
        .style("stroke-width", 0)
        .on("click", mandarOrbita)
  };

  // Creamos unos cuantos circulos para los planetas.
  crearCirculo(390, 210, 10);
  crearCirculo(500, 260, 10);
  crearCirculo(350, 80, 10);
  crearCirculo(600, 130, 10);

  // Creamos un circulo Planeta inicial.
  svg_area
  .append("circle")
    .attr("id", "Vel-1")
    .attr("cx", width / 2)
    .attr("cy", height / 2 + 100)
    .attr("r", 10)
    .style("fill", "white")

  // Creamos una tormenta solar al clickar el sol.
  const tormentaSolar = function() {

    // Duracion la fase
    var duracion = 2000;

    // Inicializamos contador.
    var i = 1;

    // Numero de repeticiones.
    max_rep = 8
    
    const faseSolar_1 = function() {

      if (i <= max_rep) {
        d3.selectAll("#Sol")
          .transition()
          .duration(duracion / i) 
          .style("fill", "orange")
          .style("stroke", "red")
          .style("stroke-width", 2)
          .attr("r", 60)
          .on("end", faseSolar_2)
      }
      else {
        // Recuperamos el sol original.
        d3.select("#Sol")
          .transition()
          .duration(1000) 
          .style("fill", "yellow")
          .style("stroke", "none")
          .style("stroke-width", 0)
      }
    }

    const faseSolar_2 = function() {
      d3.select("#Sol")
        .transition()
        .duration(duracion / i)
        .style("fill", "red")
        .style("stroke", "orange")
        .style("stroke-width", 4)
        .attr("r", 40)
        .on("end", faseSolar_1)

      i += 1;
    }

    // Repetimos animacion con duracion variable.
    faseSolar_1()
  }

  // Creamos el Sol.
  svg_area
  .append("circle")
    .attr("id", "Sol")
    .attr("cx", width / 2)
    .attr("cy", height / 2)
    .attr("r", 50)
    .style("fill", "yellow")
    .style("stroke", "none")
    .style("stroke-width", 0)
    .on("click", tormentaSolar)

  // Llamamos a la funcion de orbita.
  orbitaInfinita_1();
}