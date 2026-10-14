(() => {
  const nota = 7;
  const mensaje = nota >= 5 ? "Aprobado" : "Suspenso";
  let nivel;
  switch (true) {
    case nota >= 9:
      nivel = "Excelente";
      break;
    case nota >= 5:
      nivel = "Aprobado";
      break;
    default:
      nivel = "Suspenso";
  }
  const resultados = [
    `if/else (nota ${nota}): ${mensaje}`,
    `Operador ternario: ${mensaje}`,
    `switch: ${nivel}`,
  ];
  const datos = {
    titulo: "Condicionales: if, ternario y switch",
    codigo: [
      "const nota = 7;",
      'if (nota >= 5) console.log("Aprobado");',
      'else console.log("Suspenso");',
      'const resultado = nota >= 5 ? "Aprobado" : "Suspenso";',
      "console.log(resultado);",
    ].join("\n"),
    resultados,
    ejemplos: [
      [
        "const temperatura = 17;",
        'if (temperatura < 20) {',
        '  console.log("Hace fresco");',
        "} else {",
        '  console.log("Hace calor");',
        "}",
      ].join("\n"),
      [
        'const dia = "sábado";',
        'switch (dia) {',
        '  case "sábado":',
        '  case "domingo":',
        '    console.log("Fin de semana");',
        "    break;",
        '  default: console.log("Entre semana");',
        "}",
      ].join("\n"),
    ],
  };
  if (typeof globalThis.mostrarEjemploJS === "function") {
    globalThis.mostrarEjemploJS(datos);
  } else {
    console.log(`${datos.titulo}:\n${resultados.join("\n")}`);
  }
})();
