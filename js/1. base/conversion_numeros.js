(() => {
  const desdeTexto = Number("42");
  const resultados = [
    `Number("42"): ${desdeTexto}`,
    `parseInt("42.8", 10): ${parseInt("42.8", 10)}`,
    `parseFloat("3.14"): ${parseFloat("3.14")}`,
    `Number("hola"): ${Number("hola")}`,
    `Number.isNaN(Number("hola")): ${Number.isNaN(Number("hola"))}`,
    `Number.isFinite(42): ${Number.isFinite(42)}`,
  ];
  const datos = {
    titulo: "Conversión y comprobación de números",
    codigo: [
      'console.log(Number("42"));',
      'console.log(parseInt("42.8", 10));',
      'console.log(parseFloat("3.14"));',
      'console.log(Number("hola")); // NaN',
      'console.log(Number.isNaN(Number("hola")));',
      "console.log(Number.isFinite(42));",
    ].join("\n"),
    resultados,
    metodos: [
      {
        nombre: "Number.isNaN(valor)",
        descripcion:
          "Devuelve true únicamente si el valor es el número especial NaN; no convierte cadenas antes de comprobarlas.",
        ejemplo: 'Number.isNaN(Number("hola")); // true',
      },
      {
        nombre: "Number.isFinite(valor)",
        descripcion:
          "Devuelve true si el valor ya es un número finito; no convierte cadenas automáticamente.",
        ejemplo: 'Number.isFinite(Number("18.5")); // true',
      },
    ],
    ejemplos: [
      [
        'Number("42"); // 42',
        'parseInt("42.8", 10); // 42',
        'parseFloat("3.14"); // 3.14',
      ].join("\n"),
      [
        'const entrada = "18.5";',
        "const precio = Number(entrada);",
        "if (Number.isFinite(precio)) console.log(precio * 2); // 37",
      ].join("\n"),
    ],
  };
  if (typeof globalThis.mostrarEjemploJS === "function") {
    globalThis.mostrarEjemploJS(datos);
  } else {
    console.log(`${datos.titulo}:\n${resultados.join("\n")}`);
  }
})();
