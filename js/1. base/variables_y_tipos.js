(() => {
  const nombre = "Ane";
  const edad = 21;
  const activo = true;
  let sinAsignar;
  const resultados = [
    `typeof nombre: ${typeof nombre}`,
    `typeof edad: ${typeof edad}`,
    `typeof activo: ${typeof activo}`,
    `typeof sinAsignar: ${typeof sinAsignar}`,
    `typeof null: ${typeof null} (detalle histórico de JavaScript)`,
  ];
  const datos = {
    titulo: "Variables y tipos de datos",
    codigo: [
      'const nombre = "Ane";',
      "const edad = 21;",
      "const activo = true;",
      "let sinAsignar;",
      "console.log(typeof nombre, typeof edad, typeof activo, typeof sinAsignar);",
    ].join("\n"),
    resultados,
    ejemplos: [
      [
        'const nombre = "Ane";',
        "let edad = 21;",
        "edad = 22;",
        "console.log(nombre, edad);",
      ].join("\n"),
      [
        "const activo = true;",
        "let pendiente;",
        "console.log(typeof activo); // boolean",
        "console.log(typeof pendiente); // undefined",
      ].join("\n"),
    ],
  };
  if (typeof globalThis.mostrarEjemploJS === "function") {
    globalThis.mostrarEjemploJS(datos);
  } else {
    console.log(`${datos.titulo}:\n${resultados.join("\n")}`);
  }
})();
