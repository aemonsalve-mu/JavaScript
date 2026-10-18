(() => {
  function crearElemento(etiqueta, texto, padre, clase) {
    const elemento = document.createElement(etiqueta);
    if (texto !== undefined) elemento.textContent = texto;
    if (clase) elemento.className = clase;
    if (padre) padre.append(elemento);
    return elemento;
  }

  function crearSeccion(titulo, texto, padre, etiqueta = "h3") {
    crearElemento(etiqueta, titulo, padre);
    return crearElemento("pre", texto, padre);
  }

  function mostrarEjemplo({
    titulo,
    codigo,
    resultados,
    metodos = [],
    ejemplos = [],
    boton,
  }) {
    const contenedor =
      document.querySelector("#examples") ||
      (() => {
        const encabezado = document.createElement("header");
        crearElemento("h1", "JavaScript básico: comandos y ejemplos", encabezado);
        crearElemento(
          "p",
          "Cada tema ejecuta un ejemplo independiente. Los métodos y los ejemplos de comandos aparecen en secciones separadas.",
          encabezado,
        );
        document.body.append(encabezado);
        const main = document.createElement("main");
        main.id = "examples";
        document.body.append(main);
        return main;
      })();

    const articulo = crearElemento("article", undefined, contenedor);
    crearElemento("h2", titulo, articulo);
    crearSeccion("Código", codigo, articulo, "h3").className = "code";
    const salida = crearSeccion(
      "Resultado",
      resultados.join("\n"),
      articulo,
      "h3",
    );
    salida.className = "output";

    if (boton) {
      const botonElemento = crearElemento("button", boton.texto, articulo);
      botonElemento.type = "button";
      botonElemento.addEventListener("click", () => boton.alHacerClic(salida));
    }

    if (metodos.length > 0) {
      crearElemento("h3", "Métodos", articulo);
      metodos.forEach((metodo) => {
        const bloque = crearElemento("section", undefined, articulo, "method");
        crearElemento("h4", metodo.nombre, bloque);
        crearElemento("p", metodo.descripcion, bloque);
        crearElemento("pre", metodo.ejemplo, bloque, "method-example");
      });
    }

    if (ejemplos.length > 0) {
      crearElemento("h3", "Ejemplos del comando", articulo);
      ejemplos.forEach((ejemplo) => {
        crearElemento("pre", ejemplo, articulo, "command-example");
      });
    }
  }

  globalThis.mostrarEjemploJS = mostrarEjemplo;
})();
