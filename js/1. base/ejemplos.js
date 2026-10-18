//Ejemplo 1: Selección de un elemento y cambio de estilo

// Selecciona el body y cambia su color de fondo
d3.select("body").style("background-color", "lightblue");


///////////////////////////////////////////////////////////////////////////////////////

//Ejemplo 2: Mostrar un conjunto de datos en texto (trabajando con el body)

// Array de datos
const data = [10, 20, 30, 40];

// Selecciona el body y enlaza los datos para crear un div por cada elemento
d3.select("body")
  .selectAll("div")
  .data(data)
  .enter()
  .append("div")
  .text(d => "El valor es: " + d);  // Muestra el valor de los datos en cada div

///////////////////////////////////////////////////////////////////////////////////////

//Ejemplo 3: Enter, Update y Exit con círculos SVG

const data = [10, 20, 30];

// Crear el contenedor SVG
const svg = d3.select("#svg_area").append("svg")
    .attr("width", 500)
    .attr("height", 200);

// Vincular los datos a los círculos
const circles = svg.selectAll("circle").data(data);

// Exit: elimina los círculos no usados
circles.exit().remove();

// Enter: añade nuevos círculos para nuevos datos
circles.enter().append("circle")
    .attr("r", d => d)
    .attr("cx", (d, i) => i * 100 + 50)
    .attr("cy", 100)
    .attr("fill", "blue");
///////////////////////////////////////////////////////////////////////////////////////

//Ejemplo 4: Escalas y Ejes

// Crear un contenedor SVG
const svg = d3.select("#svg_area").append("svg")
    .attr("width", 500)
    .attr("height", 300);

// Escala lineal para el eje X
const x = d3.scaleLinear().domain([0, 50]).range([0, 480]);

// Crear el eje X
const xAxis = d3.axisBottom(x);

// Añadir el eje X al SVG
svg.append("g")
    .attr("transform", "translate(0,200)")
    .call(xAxis);


///////////////////////////////////////////////////////////////////////////////////////

//Ejemplo 5: dos ejes

// Crear un contenedor SVG
const svg = d3.select("#svg_area").append("svg")
    .attr("width", 500)
    .attr("height", 300);

// Escala lineal para el eje X (horizontal)
const x = d3.scaleLinear().domain([0, 50]).range([0, 480]);

// Crear el eje X
const xAxis = d3.axisBottom(x);

// Añadir el eje X al SVG
svg.append("g")
    .attr("transform", "translate(0,250)")  // Mover el eje X hacia abajo (250px desde arriba)
    .call(xAxis);

// Escala lineal para el eje Y (vertical)
const y = d3.scaleLinear().domain([0, 50]).range([250, 0]);

// Crear el eje Y
const yAxis = d3.axisLeft(y);

// Añadir el eje Y al SVG
svg.append("g")
    .attr("transform", "translate(30, 0)")  // Mover el eje Y hacia la derecha (30px desde el borde izquierdo)
    .call(yAxis);

///////////////////////////////////////////////////////////////////////////////////////

//Ejemplo 6: dos ejes coinciden


// Datos
const data = [10, 20, 30, 40, 50];

// Crear un contenedor SVG
const svg = d3.select("#svg_area").append("svg")
    .attr("width", 500)
    .attr("height", 300);

// Margen para el eje Y
const margin = { top: 20, right: 30, bottom: 40, left: 50 };

// Escala lineal para el eje X (horizontal), ajustada para que el rango vaya después del margen izquierdo
const x = d3.scaleLinear().domain([0, 50]).range([margin.left, 480]);

// Crear el eje X
const xAxis = d3.axisBottom(x);

// Añadir el eje X al SVG
svg.append("g")
    .attr("transform", `translate(0, ${300 - margin.bottom})`)  // Mover el eje X hacia abajo (margen inferior)
    .call(xAxis);

// Escala lineal para el eje Y (vertical), ajustada para que el rango sea de 0 a la altura total menos el margen inferior
const y = d3.scaleLinear().domain([0, 50]).range([300 - margin.bottom, margin.top]);

// Crear el eje Y
const yAxis = d3.axisLeft(y);

// Añadir el eje Y al SVG
svg.append("g")
    .attr("transform", `translate(${margin.left}, 0)`)  // Mover el eje Y hacia la derecha (margen izquierdo)
    .call(yAxis);



///////////////////////////////////////////////////////////////////////////////////////

//Ejemplo 7: dos ejes coinciden



// Definos altura y anchura del lienzo.
let width = 700;
let height = 700;

let svg = d3.select("#svg_area")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

// Linea.
svg.append("line")
    .attr("x1", 600)
    .attr("y1", 200)
    .attr("x2", 700)
    .attr("y2", 300)
        .style("stroke", "red")
        .style("stroke-width", 2);

// Rectangulo.
svg.append("rect")
    .attr("x", 400)
    .attr("y", 20)
    .attr("width", 200)
    .attr("height", 100)
    .attr("fill", "green");

// Circulo.
svg.append("circle")
    .attr("cx", 200)
    .attr("cy", 50)
    .attr("r", 20)
    .attr("stroke", "black")
    .attr("fill", "blue");

// Elipses.
svg.append("ellipse")
    .attr("cx", 450)
    .attr("cy", 200)
    .attr("rx", 100)
    .attr("ry", 50)
    .attr("fill", "orange");

// Path.
const path = d3.path();
path.moveTo(500, 400);
path.quadraticCurveTo(600, 400, 400, 300);

svg.append("path")
  .attr("d", path.toString()) // Set the 'd' attribute of the <path> element
  .attr("stroke", "blue") // Set the stroke color
  .attr("fill", "none"); // Set fill to none (transparent)

// Crea el cuerpo del gato
svg.append("circle")
    .attr("cx", 200)
    .attr("cy", 200)
    .attr("r", 100)
    .attr("fill", "gray");

// Crea la cabeza del gato
svg.append("circle")
    .attr("cx", 200)
    .attr("cy", 100)
    .attr("r", 75)
    .attr("fill", "gray");

// Crea los ojos del gato
svg.append("circle")
    .attr("cx", 160)
    .attr("cy", 80)
    .attr("r", 10)
    .attr("fill", "white");

svg.append("circle")
    .attr("cx", 240)
    .attr("cy", 80)
    .attr("r", 10)
    .attr("fill", "white");

// Crea la nariz del gato
svg.append("triangle")
    .attr("points", "200,100 195,90 205,90")
    .attr("fill", "pink");

// Crea la boca del gato
svg.append("path")
    .attr("d", "M190 110 Q200 130, 210 110")
    .attr("fill", "none")
    .attr("stroke", "pink");

// Crea las orejas del gato
svg.append("circle")
    .attr("cx", 120)
    .attr("cy", 70)
    .attr("r", 20)
    .attr("fill", "gray");

svg.append("circle")
    .attr("cx", 280)
    .attr("cy", 70)
    .attr("r", 20)
    .attr("fill", "gray");