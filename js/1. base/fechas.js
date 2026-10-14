(() => {
  const fecha = new Date("2024-01-15T12:00:00Z");
  const resultados = [
    `Date.now(): ${Date.now()} ms desde 1970`,
    `getUTCFullYear(): ${fecha.getUTCFullYear()}`,
    `getUTCMonth() (enero = 0): ${fecha.getUTCMonth()}`,
    `getUTCDate(): ${fecha.getUTCDate()}`,
    `toISOString(): ${fecha.toISOString()}`,
    `toLocaleDateString("es-ES"): ${fecha.toLocaleDateString("es-ES", { timeZone: "UTC" })}`,
  ];
  const datos = {
    titulo: "Fechas (Date)",
    codigo: [
      'const fecha = new Date("2024-01-15T12:00:00Z");',
      "console.log(Date.now());",
      "console.log(fecha.getUTCFullYear());",
      "console.log(fecha.getUTCMonth()); // enero = 0",
      "console.log(fecha.getUTCDate());",
      "console.log(fecha.toISOString());",
      'console.log(fecha.toLocaleDateString("es-ES", { timeZone: "UTC" }));',
    ].join("\n"),
    resultados,
    metodos: [
      {
        nombre: "Date.now()",
        descripcion:
          "Devuelve los milisegundos transcurridos desde el 1 de enero de 1970 UTC.",
        ejemplo: "const instante = Date.now();",
      },
      {
        nombre: "getUTCFullYear()",
        descripcion: "Obtiene el año de la fecha en UTC.",
        ejemplo: "fecha.getUTCFullYear(); // 2024",
      },
      {
        nombre: "getUTCMonth()",
        descripcion:
          "Obtiene el mes en UTC como un número de 0 a 11; enero es 0.",
        ejemplo: "fecha.getUTCMonth(); // 0, enero",
      },
      {
        nombre: "getUTCDate()",
        descripcion: "Obtiene el día del mes en UTC, de 1 a 31.",
        ejemplo: "fecha.getUTCDate(); // 15",
      },
      {
        nombre: "toISOString()",
        descripcion: "Convierte la fecha a texto en formato ISO 8601 UTC.",
        ejemplo: 'fecha.toISOString(); // "2024-01-15T12:00:00.000Z"',
      },
      {
        nombre: "toLocaleDateString(idioma, opciones)",
        descripcion:
          "Devuelve la fecha como texto según el idioma y las opciones regionales indicadas.",
        ejemplo:
          'fecha.toLocaleDateString("es-ES", { timeZone: "UTC" }); // "15/1/2024"',
      },
    ],
    ejemplos: [
      [
        'const fecha = new Date("2024-01-15T12:00:00Z");',
        "console.log(fecha.getUTCFullYear()); // 2024",
        "console.log(fecha.getUTCMonth()); // 0, enero",
      ].join("\n"),
    ],
  };
  if (typeof globalThis.mostrarEjemploJS === "function") {
    globalThis.mostrarEjemploJS(datos);
  } else {
    console.log(`${datos.titulo}:\n${resultados.join("\n")}`);
  }
})();
