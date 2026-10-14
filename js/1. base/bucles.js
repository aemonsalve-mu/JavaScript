(() => {
  const numeros = [];
  for (let i = 0; i < 3; i++) numeros.push(i);

  const frutas = [];
  for (const fruta of ["pera", "manzana"]) frutas.push(fruta);

  let cuenta = 0;
  while (cuenta < 2) cuenta++;

  const resultados = [
    `for: ${numeros.join(", ")}`,
    `for...of: ${frutas.join(", ")}`,
    `while: cuenta = ${cuenta}`,
  ];
  const datos = {
    titulo: "Bucles: for, for...of y while",
    codigo: [
      "for (let i = 0; i < 3; i++) {",
      "  console.log(i);",
      "}",
      'for (const fruta of ["pera", "manzana"]) {',
      "  console.log(fruta);",
      "}",
      "let cuenta = 0;",
      "while (cuenta < 2) cuenta++;",
    ].join("\n"),
    resultados,
    ejemplos: [
      [
        "for (let numero = 1; numero <= 3; numero++) {",
        "  console.log(numero);",
        "}",
      ].join("\n"),
      [
        'for (const fruta of ["pera", "manzana"]) {',
        "  console.log(fruta);",
        "}",
      ].join("\n"),
      [
        "let cuenta = 0;",
        "while (cuenta < 2) {",
        "  cuenta++;",
        "}",
        "console.log(cuenta); // 2",
      ].join("\n"),
    ],
  };
  if (typeof globalThis.mostrarEjemploJS === "function") {
    globalThis.mostrarEjemploJS(datos);
  } else {
    console.log(`${datos.titulo}:\n${resultados.join("\n")}`);
  }
})();
