(() => {
  const resultados = [
    `5 === "5": ${5 === "5"}`,
    `5 == "5": ${5 == "5"}`,
    `8 > 3: ${8 > 3}`,
    `true && false: ${true && false}`,
    `true || false: ${true || false}`,
    `!true: ${!true}`,
    `null ?? "por defecto": ${null ?? "por defecto"}`,
  ];
  const datos = {
    titulo: "Comparación y operadores lógicos",
    codigo: [
      'console.log(5 === "5"); // false: no convierte tipos',
      'console.log(5 == "5");  // true: convierte tipos',
      "console.log(8 > 3);",
      "console.log(true && false, true || false, !true);",
      'console.log(null ?? "por defecto");',
    ].join("\n"),
    resultados,
    ejemplos: [
      [
        "const edad = 20;",
        "console.log(edad >= 18); // true",
        'console.log(edad === "20"); // false',
      ].join("\n"),
      [
        "const tieneEntrada = true;",
        "const esInvitado = false;",
        "console.log(tieneEntrada || esInvitado); // true",
        "console.log(tieneEntrada && esInvitado); // false",
      ].join("\n"),
    ],
  };
  if (typeof globalThis.mostrarEjemploJS === "function") {
    globalThis.mostrarEjemploJS(datos);
  } else {
    console.log(`${datos.titulo}:\n${resultados.join("\n")}`);
  }
})();
