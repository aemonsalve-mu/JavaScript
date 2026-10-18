(() => {
  const resultados = [
    `Math.round(4.6): ${Math.round(4.6)}`,
    `Math.floor(4.9): ${Math.floor(4.9)}`,
    `Math.ceil(4.1): ${Math.ceil(4.1)}`,
    `Math.abs(-8): ${Math.abs(-8)}`,
    `Math.max(2, 9, 4): ${Math.max(2, 9, 4)}`,
    `Math.min(2, 9, 4): ${Math.min(2, 9, 4)}`,
    `Math.sqrt(81): ${Math.sqrt(81)}`,
    `Math.random(): ${Math.random()}`,
  ];
  const datos = {
    titulo: "Math: operaciones matemáticas",
    codigo: [
      "console.log(Math.round(4.6));",
      "console.log(Math.floor(4.9), Math.ceil(4.1));",
      "console.log(Math.abs(-8));",
      "console.log(Math.max(2, 9, 4), Math.min(2, 9, 4));",
      "console.log(Math.sqrt(81));",
      "console.log(Math.random());",
    ].join("\n"),
    resultados,
    metodos: [
      {
        nombre: "Math.round(numero)",
        descripcion: "Redondea al entero más cercano.",
        ejemplo: "Math.round(4.6); // 5",
      },
      {
        nombre: "Math.floor(numero)",
        descripcion: "Redondea hacia abajo al entero menor o igual.",
        ejemplo: "Math.floor(4.9); // 4",
      },
      {
        nombre: "Math.ceil(numero)",
        descripcion: "Redondea hacia arriba al entero mayor o igual.",
        ejemplo: "Math.ceil(4.1); // 5",
      },
      {
        nombre: "Math.abs(numero)",
        descripcion: "Devuelve el valor absoluto, sin signo negativo.",
        ejemplo: "Math.abs(-8); // 8",
      },
      {
        nombre: "Math.max(...numeros)",
        descripcion: "Devuelve el mayor de los números recibidos.",
        ejemplo: "Math.max(2, 9, 4); // 9",
      },
      {
        nombre: "Math.min(...numeros)",
        descripcion: "Devuelve el menor de los números recibidos.",
        ejemplo: "Math.min(2, 9, 4); // 2",
      },
      {
        nombre: "Math.sqrt(numero)",
        descripcion: "Devuelve la raíz cuadrada del número.",
        ejemplo: "Math.sqrt(81); // 9",
      },
      {
        nombre: "Math.random()",
        descripcion: "Devuelve un número pseudoaleatorio mayor o igual que 0 y menor que 1.",
        ejemplo: "Math.random(); // por ejemplo, 0.483...",
      },
    ],
    ejemplos: [
      [
        "const dado = Math.floor(Math.random() * 6) + 1;",
        "console.log(dado); // entero entre 1 y 6",
      ].join("\n"),
    ],
  };
  if (typeof globalThis.mostrarEjemploJS === "function") {
    globalThis.mostrarEjemploJS(datos);
  } else {
    console.log(`${datos.titulo}:\n${resultados.join("\n")}`);
  }
})();
