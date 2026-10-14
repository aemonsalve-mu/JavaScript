# Carga de D3.js en un archivo HTML 

## Opción 1: Descargar D3.js y usarla localmente

1. Descarga el archivo d3.min.js desde el sitio oficial de D3 o su repositorio.
2. Guárdalo dentro de una carpeta en tu proyecto (por ejemplo, en una carpeta llamada js/ o d3/).
3. Enlázalo en tu archivo HTML usando la ruta local
   `<script src="d3/d3.min.js"></script>`


## Opción 2: Cargar D3.js mediante CDN (La más rápida y recomendada)

Agrega la etiqueta `<script>` apuntando a una versión pública de D3 (por ejemplo, jsDelivr o unpkg) dentro del <head> de tu archivo HTML   
  1. `<script src="https://d3js.org/d3.v4.js"></script>`

  2.  `<script src="https://d3js.org/d3.v7.min.js"></script>`
  
  3.  `<script src="https://cdn.jsdelivr.net/npm/d3@7.9.0/dist/d3.min.js"></script>`

