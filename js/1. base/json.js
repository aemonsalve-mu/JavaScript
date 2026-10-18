(() => {
  const usuario = { nombre: "Ane", activo: true };
  const texto = JSON.stringify(usuario);
  const copia = JSON.parse(texto);
  const resultados = [
    `JSON.stringify: ${texto}`,
    `JSON.parse -> nombre: ${copia.nombre}`,
    `JSON.parse -> activo: ${copia.activo}`,
  ];
  const datos = {
    titulo: "JSON: convertir y recuperar datos",
    codigo: [
      'const usuario = { nombre: "Ane", activo: true };',
      "const texto = JSON.stringify(usuario);",
      "const copia = JSON.parse(texto);",
      "console.log(texto);",
      "console.log(copia.nombre, copia.activo);",
    ].join("\n"),
    resultados,
    metodos: [
      {
        nombre: "JSON.stringify(valor)",
        descripcion: "Convierte un valor compatible con JSON en una cadena de texto.",
        ejemplo: 'JSON.stringify({ nombre: "Ane" }); // "{\\"nombre\\":\\"Ane\\"}"',
      },
      {
        nombre: "JSON.parse(texto)",
        descripcion: "Convierte una cadena que contiene JSON válido en un valor de JavaScript. Lanza SyntaxError si el texto no es válido.",
        ejemplo: 'JSON.parse(\'{"nombre":"Ane"}\').nombre; // "Ane"',
      },
    ],
    ejemplos: [
      [
        'const lista = JSON.stringify(["pera", "manzana"]);',
        "const frutas = JSON.parse(lista);",
        "console.log(frutas); // [\"pera\", \"manzana\"]",
      ].join("\n"),
    ],
  };
  if (typeof globalThis.mostrarEjemploJS === "function") {
    globalThis.mostrarEjemploJS(datos);
  } else {
    console.log(`${datos.titulo}:\n${resultados.join("\n")}`);
  }
})();
