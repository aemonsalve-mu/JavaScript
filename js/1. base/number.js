(() => {
  const resultados = [
    `Number.isInteger(4): ${Number.isInteger(4)}`,
    `Number.isSafeInteger(9007199254740991): ${Number.isSafeInteger(9007199254740991)}`,
    `(3.14159).toFixed(2): ${(3.14159).toFixed(2)}`,
    `Number.isFinite(Infinity): ${Number.isFinite(Infinity)}`,
  ];
  const datos = {
    titulo: "Number: comprobaciones y formato",
    codigo: [
      "console.log(Number.isInteger(4));",
      "console.log(Number.isSafeInteger(9007199254740991));",
      "console.log((3.14159).toFixed(2));",
      "console.log(Number.isFinite(Infinity));",
    ].join("\n"),
    resultados,
    metodos: [
      {
        nombre: "Number.isInteger(valor)",
        descripcion: "Comprueba si un valor numérico no tiene parte decimal.",
        ejemplo: "Number.isInteger(4); // true",
      },
      {
        nombre: "Number.isSafeInteger(valor)",
        descripcion:
          "Comprueba si el valor es un entero dentro del rango que JavaScript puede representar con seguridad.",
        ejemplo: "Number.isSafeInteger(9007199254740991); // true",
      },
      {
        nombre: "Number.isFinite(valor)",
        descripcion:
          "Comprueba que el valor es un número finito; Infinity y NaN no son finitos.",
        ejemplo: "Number.isFinite(Infinity); // false",
      },
      {
        nombre: "numero.toFixed(decimales)",
        descripcion:
          "Devuelve una cadena con el número de decimales indicado, rellenando ceros cuando sea necesario.",
        ejemplo: '(3.5).toFixed(2); // "3.50"',
      },
    ],
    ejemplos: [
      [
        "const precio = 3.5;",
        'console.log(precio.toFixed(2)); // "3.50"',
        "console.log(Number.isInteger(precio)); // false",
      ].join("\n"),
      [
        "console.log(Number.MAX_SAFE_INTEGER);",
        "// Mayor entero seguro: 9007199254740991",
      ].join("\n"),
    ],
  };
  if (typeof globalThis.mostrarEjemploJS === "function") {
    globalThis.mostrarEjemploJS(datos);
  } else {
    console.log(`${datos.titulo}:\n${resultados.join("\n")}`);
  }
})();
