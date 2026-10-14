(() => {
  const resultados = [];
  try {
    JSON.parse("{texto incorrecto}");
  } catch (error) {
    if (!(error instanceof SyntaxError)) throw error;
    resultados.push("JSON.parse produjo un SyntaxError");
    resultados.push(`error.name: ${error.name}`);
  }
  function dividir(a, b) {
    if (b === 0) throw new Error("No se puede dividir por cero");
    return a / b;
  }
  try {
    dividir(10, 0);
  } catch (error) {
    if (!(error instanceof Error)) throw error;
    resultados.push(`Error propio: ${error.message}`);
  }
  const datos = {
    titulo: "Errores: try, catch y throw",
    codigo: [
      "try {",
      '  JSON.parse("{texto incorrecto}");',
      "} catch (error) {",
      '  console.log(error.name); // SyntaxError',
      "}",
    ].join("\n"),
    resultados,
    ejemplos: [
      [
        "try {",
        '  JSON.parse("{incorrecto}");',
        "} catch (error) {",
        '  console.log("No se pudo leer el JSON");',
        "}",
      ].join("\n"),
      [
        "function dividir(a, b) {",
        '  if (b === 0) throw new Error("Divisor igual a cero");',
        "  return a / b;",
        "}",
        "console.log(dividir(10, 2)); // 5",
      ].join("\n"),
    ],
  };
  if (typeof globalThis.mostrarEjemploJS === "function") {
    globalThis.mostrarEjemploJS(datos);
  } else {
    console.log(`${datos.titulo}:\n${resultados.join("\n")}`);
  }
})();
