(() => {
  const numeros = [1, 2, 3];
  numeros.push(4);
  const resultados = [
    `Array tras push(4): ${JSON.stringify(numeros)}`,
    `map (duplicar): ${JSON.stringify(numeros.map((numero) => numero * 2))}`,
    `filter (pares): ${JSON.stringify(numeros.filter((numero) => numero % 2 === 0))}`,
    `find (> 2): ${numeros.find((numero) => numero > 2)}`,
    `reduce (suma): ${numeros.reduce((suma, numero) => suma + numero, 0)}`,
    `includes(3): ${numeros.includes(3)}`,
  ];
  const datos = {
    titulo: "Arrays: listas y métodos",
    codigo: [
      "const numeros = [1, 2, 3];",
      "numeros.push(4);",
      "console.log(numeros.map(numero => numero * 2));",
      "console.log(numeros.filter(numero => numero % 2 === 0));",
      "console.log(numeros.find(numero => numero > 2));",
      "console.log(numeros.reduce((suma, numero) => suma + numero, 0));",
      "console.log(numeros.includes(3));",
    ].join("\n"),
    resultados,
    metodos: [
      {
        nombre: "push(elemento)",
        descripcion: "Añade uno o más elementos al final del array y devuelve la nueva longitud.",
        ejemplo: "const frutas = [\"pera\"];\nfrutas.push(\"manzana\"); // 2",
      },
      {
        nombre: "map(funcion)",
        descripcion: "Crea un nuevo array aplicando una función a cada elemento.",
        ejemplo: "const dobles = [1, 2].map(n => n * 2); // [2, 4]",
      },
      {
        nombre: "filter(funcion)",
        descripcion: "Crea un array con los elementos que cumplen la condición.",
        ejemplo: "const pares = [1, 2, 3].filter(n => n % 2 === 0); // [2]",
      },
      {
        nombre: "find(funcion)",
        descripcion: "Devuelve el primer elemento que cumple la condición, o undefined si no hay ninguno.",
        ejemplo: "const mayor = [1, 3, 5].find(n => n > 2); // 3",
      },
      {
        nombre: "reduce(funcion, valorInicial)",
        descripcion: "Recorre el array acumulando sus elementos en un único resultado.",
        ejemplo: "const suma = [1, 2, 3].reduce((total, n) => total + n, 0); // 6",
      },
      {
        nombre: "includes(valor)",
        descripcion: "Devuelve true si el array contiene el valor indicado.",
        ejemplo: '[\"pera\", \"manzana\"].includes(\"pera\"); // true',
      },
    ],
    ejemplos: [
      [
        "const edades = [12, 18, 25];",
        "const mayores = edades.filter(edad => edad >= 18);",
        "console.log(mayores); // [18, 25]",
        "console.log(edades.length); // length es una propiedad, no un método",
      ].join("\n"),
    ],
  };
  if (typeof globalThis.mostrarEjemploJS === "function") {
    globalThis.mostrarEjemploJS(datos);
  } else {
    console.log(`${datos.titulo}:\n${resultados.join("\n")}`);
  }
})();
