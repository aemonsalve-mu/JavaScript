(() => {
  const a = 10;
  const b = 3;
  let puntos = 10;
  puntos += 5;
  puntos -= 2;
  const resultados = [
    `Suma: ${a + b}`,
    `Resta: ${a - b}`,
    `Multiplicación: ${a * b}`,
    `División: ${a / b}`,
    `Resto (%): ${a % b}`,
    `Potencia (**): ${a ** b}`,
    `Asignación acumulada (+= y -=): ${puntos}`,
    `Incremento (++): ${++puntos}`,
  ];
  const datos = {
    titulo: "Operadores aritméticos y de asignación",
    codigo: [
      "const a = 10, b = 3;",
      "console.log(a + b, a - b, a * b, a / b);",
      "console.log(a % b, a ** b);",
      "let puntos = 10;",
      "puntos += 5;",
      "puntos -= 2;",
    ].join("\n"),
    resultados,
    ejemplos: [
      [
        "const ancho = 8;",
        "const alto = 5;",
        "console.log(ancho * alto); // 40",
      ].join("\n"),
      [
        "let puntos = 10;",
        "puntos += 5;",
        "puntos -= 2;",
        "console.log(puntos); // 13",
      ].join("\n"),
    ],
  };
  if (typeof globalThis.mostrarEjemploJS === "function") {
    globalThis.mostrarEjemploJS(datos);
  } else {
    console.log(`${datos.titulo}:\n${resultados.join("\n")}`);
  }
})();
