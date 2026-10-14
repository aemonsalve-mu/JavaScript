(() => {
  const datosPersona = {
    nombre: "Ane",
    edad: 21,
  };
  const persona = {
    ...datosPersona,
    saludar() {
      return `Hola, soy ${this.nombre}`;
    },
  };
  const resultados = [
    `persona.nombre: ${persona.nombre}`,
    `persona["edad"]: ${persona["edad"]}`,
    `persona.saludar(): ${persona.saludar()}`,
    `Object.keys: ${JSON.stringify(Object.keys(datosPersona))}`,
    `Object.values: ${JSON.stringify(Object.values(datosPersona))}`,
    `Object.entries: ${JSON.stringify(Object.entries(datosPersona))}`,
  ];
  const datos = {
    titulo: "Objetos y propiedades",
    codigo: [
      "const datosPersona = {",
      '  nombre: "Ane",',
      "  edad: 21,",
      "};",
      "const persona = {",
      "...datosPersona,",
      "saludar() { return `Hola, soy ${this.nombre}`; }",
      "};",
      "console.log(persona.nombre, persona.saludar());",
      "console.log(Object.keys(datosPersona));",
      "console.log(Object.values(datosPersona));",
      "console.log(Object.entries(datosPersona));",
    ].join("\n"),
    resultados,
    metodos: [
      {
        nombre: "Object.keys(objeto)",
        descripcion: "Devuelve un array con los nombres de las propiedades enumerables propias del objeto.",
        ejemplo: 'Object.keys({ nombre: "Ane", edad: 21 }); // ["nombre", "edad"]',
      },
      {
        nombre: "Object.values(objeto)",
        descripcion: "Devuelve un array con los valores de las propiedades enumerables propias del objeto.",
        ejemplo: 'Object.values({ nombre: "Ane", edad: 21 }); // ["Ane", 21]',
      },
      {
        nombre: "Object.entries(objeto)",
        descripcion: "Devuelve un array de pares [clave, valor] de las propiedades enumerables propias.",
        ejemplo: 'Object.entries({ nombre: "Ane" }); // [["nombre", "Ane"]]',
      },
      {
        nombre: "persona.saludar()",
        descripcion: "Es un método definido dentro del objeto; this permite acceder a las propiedades del mismo objeto.",
        ejemplo: 'persona.saludar(); // "Hola, soy Ane"',
      },
    ],
    ejemplos: [
      [
        'const producto = { nombre: "Libro", precio: 12 };',
        "producto.precio = 10;",
        'console.log(`${producto.nombre}: ${producto.precio} €`);',
      ].join("\n"),
    ],
  };
  if (typeof globalThis.mostrarEjemploJS === "function") {
    globalThis.mostrarEjemploJS(datos);
  } else {
    console.log(`${datos.titulo}:\n${resultados.join("\n")}`);
  }
})();
