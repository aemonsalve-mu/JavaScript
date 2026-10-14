# JavaScript y visualización de datos

Este directorio reúne material de aprendizaje para JavaScript básico y ejemplos de visualización con D3, Plotly y Leaflet. La estructura ha sido reorganizada en bloques temáticos para facilitar el estudio y la ejecución de los ejercicios.

## Objetivo

El proyecto pretende servir como guía práctica para:

- aprender los fundamentos del lenguaje JavaScript,
- probar ejemplos sencillos interactivos con DOM y funciones,
- explorar plantillas y gráficos con bibliotecas de visualización,
- trabajar con materiales adicionales y ejemplos de apoyo.

## Estructura actual del directorio

```text
JavaScript/
├── README.md                         # Documentación del proyecto
├── index_comandos_js.html            # Página principal para ejemplos básicos de JS
├── d3.v7.js                          # Biblioteca D3 local
├── css/
│   └── comandos_js.css               # Estilos de la interfaz de ejemplos básicos
├── js/
│   ├── base/
│   │   ├── arrays.js
│   │   ├── bucles.js
│   │   ├── cadenas.js
│   │   ├── condicionales.js
│   │   ├── conversion_numeros.js
│   │   ├── dom_eventos.js
│   │   ├── errores.js
│   │   ├── ejemplos.js
│   │   ├── fechas.js
│   │   ├── funciones.js
│   │   ├── json.js
│   │   ├── math.js
│   │   ├── mostrar_ejemplo.js
│   │   ├── number.js
│   │   ├── objetos.js
│   │   ├── operadores_aritmeticos.js
│   │   ├── operadores_comparacion.js
│   │   └── variables_y_tipos.js
│   │
│   ├── plantillas/
│   │   ├── README.md
│   │   ├── d3.v7.js
│   │   ├── graficos_base.js
│   │   ├── index_graph.html
│   │   ├── load_files_types.js
│   │   └── plantillad3.html
│   │
│   ├── 3. d3/
│   │   ├── 3.1. graphics/
│   │   └── 3.2. aanimation/
│   │
│   ├── 4. plotly/
│   │   ├── Animación-20261004.zip
│   │   ├── Animación_plotly-20261011 (1).zip
│   │   ├── Ejemplos-20261004.zip
│   │   ├── Ejemplos_plotly_20261011.zip
│   │   └── ejemplos plotly_extra.zip
│   │
│   ├── 5. Leaflet/
│   │   ├── Ejemplos-20261004.zip
│   │   └── Ejemplos-_leaf20261011.zip
│   │
│   └── 6. material_adicional/
│       ├── dos graficos en linea.zip
│       ├── ejemplos plotly.zip
│       ├── figuras.html
│       ├── grafico_lineas_1.html
│       ├── grafico_lineas_2.html
│       ├── lineas_multiples.html
│       └── pepe_the_frog.html
│
├── objetos_y_m_todos_en_js.md     # Apuntes y resumen de conceptos clave
└── ...
```

## Cómo ejecutarlo

### 1) Ejemplos básicos de JavaScript

Abre `index_comandos_js.html` en un navegador. La página carga los scripts ubicados en `js/base/` y genera la colección de ejercicios del curso.

### 2) Plantillas y gráficos con D3

Dentro de `js/plantillas/` y `js/3. d3/` hay ejemplos HTML y scripts JavaScript listos para abrir con el navegador. En algunos casos es necesario descomprimir archivos `.zip` antes de ejecutarlos.

### 3) Material adicional

La carpeta `js/4. plotly/`, `js/5. Leaflet/` y `js/6. material_adicional/` contiene ejemplos complementarios, recursos descargados y ejercicios de apoyo para visualización y representación gráfica.

## Temas incluidos

La base del proyecto cubre los siguientes conceptos:

- Variables y tipos de datos
- Operadores aritméticos
- Operadores de comparación
- Conversión de números
- Objeto `Number`
- Objeto `Math`
- Cadenas de texto
- Fechas
- Arrays
- Objetos
- Condicionales
- Bucles
- Funciones
- JSON
- Manejo de errores
- DOM y eventos

Además, la estructuración del directorio facilita el uso de contenidos más avanzados con:

- D3.js
- Plotly
- Leaflet
- Plantillas gráficas
- Ejercicios extras y material de apoyo

## Funcionamiento general

La parte inicial del proyecto usa un patrón muy simple:

- cada archivo recoge un tema concreto,
- los scripts se cargan de forma ordenada,
- el archivo `js/base/mostrar_ejemplo.js` ayuda a renderizar los ejemplos,
- la ejecución ocurre en navegador sin necesidad de un servidor ni de dependencias externas complejas.

## Recomendaciones de uso

- Empieza por la carpeta `js/base/` para aprender los fundamentos.
- Revisa `objetos_y_m_todos_en_js.md` para consolidar teoría y conceptos clave.
- Para visualización avanzada, abre los ejemplos dentro de `js/plantillas/`, `js/3. d3/`, `js/4. plotly/` y `js/5. Leaflet/`.
- Si un recurso está comprimido en `.zip`, extráelo antes de abrir el archivo HTML asociado.

## Nota final

Este repositorio está pensado como material didáctico para aprender JavaScript y visualización de datos de manera progresiva, con ejemplos organizados por nivel y temática.