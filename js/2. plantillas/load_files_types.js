// 1. Cargar un archivo JSON
async function cargarJSON() {
  const respuesta = await fetch('datos.json');
  const datos = await respuesta.json();
  console.log("JSON cargado:", datos);
}

// 2. Cargar un archivo CSV (Usando la librería PapaParse vía script o npm)
async function cargarCSV() {
  const respuesta = await fetch('datos.csv');
  const texto = await respuesta.text();
  
  // Papa.parse convierte el texto CSV en arreglos/objetos
  const datos = Papa.parse(texto, { header: true });
  console.log("CSV cargado:", datos.data);
}

// 3. Cargar un archivo de Excel (Usando la librería SheetJS / XLSX)
async function cargarExcel() {
  const respuesta = await fetch('datos.xlsx');
  const buffer = await respuesta.arrayBuffer();
  
  const libro = XLSX.read(buffer, { type: 'array' });
  const primeraHoja = libro.SheetNames[0];
  const datos = XLSX.utils.sheet_to_json(libro.Sheets[primeraHoja]);
  console.log("Excel cargado:", datos);
}

// 4. Cargar una base de datos SQLite (.db) (Usando la librería sql.js)
async function cargarSQLite() {
  const respuesta = await fetch('mi_base.db');
  const buffer = await respuesta.arrayBuffer();
  
  // Inicializar sql.js y cargar los bytes de la BD
  const SQL = await initSqlJs({ locateFile: file => `https://js.org{file}` });
  const db = new SQL.Database(new Uint8Array(buffer));
  
  const resultado = db.exec("SELECT * FROM mi_tabla");
  console.log("Datos de la DB:", resultado);
}
