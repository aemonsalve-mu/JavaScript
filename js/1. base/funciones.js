(() => {
  function sumar(a, b) {
    return a + b;
  }
  const duplicar = (numero) => numero * 2;
  function saludar(nombre = "amiga") {
    return `Hola, ${nombre}`;
  }
  const resultados = [
    `sumar(2, 3): ${sumar(2, 3)}`,
    `duplicar(4): ${duplicar(4)}`,
    `saludar(): ${saludar()}`,
  ];
  const datos = {
    titulo: "Funciones: parámetros y valores de retorno",
    codigo: [
      "function sumar(a, b) {",
      "  return a + b;",
      "}",
      "const duplicar = numero => numero * 2;",
      "console.log(sumar(2, 3));",
      "console.log(duplicar(4));",
    ].join("\n"),
    resultados,
    ejemplos: [
      [
        "function restar(a, b) {",
        "  return a - b;",
        "}",
        "console.log(restar(8, 3)); // 5",
      ].join("\n"),
      [
        'const saludar = (nombre = "amiga") => `Hola, ${nombre}`;',
        'console.log(saludar("Ane")); // Hola, Ane',
      ].join("\n"),
    ],
  };
  if (typeof globalThis.mostrarEjemploJS === "function") {
    globalThis.mostrarEjemploJS(datos);
  } else {
    console.log(`${datos.titulo}:\n${resultados.join("\n")}`);
  }
})();
