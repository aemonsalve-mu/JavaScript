(() => {
  const resultados = ["Pulsa el botón para incrementar el contador."];
  const datos = {
    titulo: "DOM y eventos",
    codigo: [
      'const boton = document.querySelector("#boton-contador");',
      'const resultado = document.querySelector("#resultado-dom");',
      "let contador = 0;",
      'boton.addEventListener("click", () => {',
      "  contador++;",
      "  resultado.textContent = `Clics: ${contador}`;",
      "});",
    ].join("\n"),
    resultados,
    metodos: [
      {
        nombre: "document.querySelector(selector)",
        descripcion: "Busca el primer elemento del documento que coincide con el selector CSS; devuelve null si no encuentra ninguno.",
        ejemplo: 'const boton = document.querySelector("#guardar");',
      },
      {
        nombre: "elemento.addEventListener(evento, funcion)",
        descripcion: "Registra una función para que se ejecute cuando el elemento recibe el evento indicado.",
        ejemplo: 'boton.addEventListener("click", () => console.log("Clic"));',
      },
    ],
    ejemplos: [
      [
        'const titulo = document.querySelector("h1");',
        'titulo.textContent = "¡JavaScript en marcha!";',
      ].join("\n"),
    ],
  };

  if (typeof globalThis.mostrarEjemploJS === "function") {
    let contador = 0;
    datos.boton = {
      texto: "Incrementar contador",
      alHacerClic(salida) {
        contador++;
        salida.textContent = `Clics: ${contador}`;
      },
    };
    globalThis.mostrarEjemploJS(datos);
  } else {
    console.log(`${datos.titulo}: abre index_comandos_js.html para probar el botón.`);
  }
})();
