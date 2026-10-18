(() => {
  const lenguaje = "JavaScript";
  const resultados = [
    `toUpperCase(): ${lenguaje.toUpperCase()}`,
    `toLowerCase(): ${lenguaje.toLowerCase()}`,
    `trim(): ${"  hola  ".trim()}`,
    `includes("Script"): ${lenguaje.includes("Script")}`,
    `slice(0, 4): ${lenguaje.slice(0, 4)}`,
    `replace("Java", "Type"): ${lenguaje.replace("Java", "Type")}`,
    `startsWith("Java"): ${lenguaje.startsWith("Java")}`,
  ];
  const datos = {
    titulo: "Cadenas de texto (String)",
    codigo: [
      'const lenguaje = "JavaScript";',
      "console.log(lenguaje.toUpperCase(), lenguaje.toLowerCase());",
      'console.log("  hola  ".trim());',
      'console.log(lenguaje.includes("Script"));',
      "console.log(lenguaje.slice(0, 4));",
      'console.log(lenguaje.replace("Java", "Type"));',
      'console.log(lenguaje.startsWith("Java"));',
    ].join("\n"),
    resultados,
    metodos: [
      {
        nombre: "toUpperCase()",
        descripcion: "Devuelve la cadena convertida a mayúsculas.",
        ejemplo: '"JavaScript".toUpperCase(); // "JAVASCRIPT"',
      },
      {
        nombre: "toLowerCase()",
        descripcion: "Devuelve la cadena convertida a minúsculas.",
        ejemplo: '"HOLA".toLowerCase(); // "hola"',
      },
      {
        nombre: "trim()",
        descripcion:
          "Devuelve una cadena sin espacios en blanco al principio ni al final.",
        ejemplo: '"  hola  ".trim(); // "hola"',
      },
      {
        nombre: "includes(texto)",
        descripcion: "Comprueba si la cadena contiene el texto indicado.",
        ejemplo: '"JavaScript".includes("Script"); // true',
      },
      {
        nombre: "slice(inicio, fin)",
        descripcion:
          "Extrae una parte de la cadena; el índice final no se incluye.",
        ejemplo: '"JavaScript".slice(0, 4); // "Java"',
      },
      {
        nombre: "replace(busqueda, reemplazo)",
        descripcion:
          "Devuelve una cadena con la primera coincidencia reemplazada.",
        ejemplo: '"JavaScript".replace("Java", "Type"); // "TypeScript"',
      },
      {
        nombre: "startsWith(texto)",
        descripcion: "Comprueba si la cadena empieza por el texto indicado.",
        ejemplo: '"JavaScript".startsWith("Java"); // true',
      },
    ],
    ejemplos: [
      [
        'const nombre = "  Ane  ".trim();',
        'console.log(`Hola, ${nombre}!`);',
        "console.log(nombre.length); // length es una propiedad, no un método",
      ].join("\n"),
    ],
  };
  if (typeof globalThis.mostrarEjemploJS === "function") {
    globalThis.mostrarEjemploJS(datos);
  } else {
    console.log(`${datos.titulo}:\n${resultados.join("\n")}`);
  }
})();
