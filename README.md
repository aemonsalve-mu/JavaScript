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
├── index.html                        # Inicio con selección de actividades
├── index_comandos.html               # Actividad de JavaScript básico
├── index_ej.html                     # Actividad de visualización con D3.js
├── d3.v7.js                          # Biblioteca D3 local
├── css/
│   ├── inicio.css                    # Estilos de la página de inicio
│   └── comandos_js.css               # Estilos de la interfaz de ejemplos básicos
├── Ejercicio/
│   ├── financial_data.json           # Datos del dashboard financiero
│   └── css/style.css                 # Estilos del dashboard
├── js/
│   ├── 1. base/
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
│   ├── 2. plantillas/
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

### Página de inicio y actividades

Abre `index.html` en el navegador para ver la selección de actividades:

- **JavaScript básico** (`index_comandos.html`): carga los ejemplos organizados por temas desde `js/1. base/`.
- **Visualización de datos** (`index_ej.html`): abre un dashboard financiero interactivo con gráficos D3.js. Sus estilos y datos se encuentran en `Ejercicio/css/style.css` y `Ejercicio/financial_data.json`.

La página de inicio está preparada para ampliar la selección: se pueden añadir nuevas tarjetas con enlaces a otras actividades.

Para que el dashboard cargue automáticamente los datos, abre el proyecto mediante un servidor web local (por ejemplo, la extensión Live Server de VS Code). Si abres el archivo directamente y el navegador bloquea la lectura automática por restricciones CORS, selecciona `Ejercicio/financial_data.json` con el botón de carga del dashboard.

### Más ejemplos y material complementario

Dentro de `js/2. plantillas/` y `js/3. d3/` hay ejemplos HTML y scripts JavaScript listos para abrir con el navegador. Las carpetas `js/4. plotly/`, `js/5. Leaflet/` y `js/6. material_adicional/` reúnen ejemplos complementarios y recursos de apoyo. En algunos casos es necesario descomprimir archivos `.zip` antes de ejecutarlos.

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
- el archivo `js/1. base/mostrar_ejemplo.js` ayuda a renderizar los ejemplos,
- la ejecución ocurre en navegador sin necesidad de un servidor ni de dependencias externas complejas.

## Recomendaciones de uso

- Empieza por `index.html` y elige la actividad que quieras explorar.
- Para aprender los fundamentos, comienza por `index_comandos.html` y la carpeta `js/1. base/`.
- Revisa `objetos_y_m_todos_en_js.md` para consolidar teoría y conceptos clave.
- Para visualización avanzada, abre los ejemplos dentro de `js/plantillas/`, `js/3. d3/`, `js/4. plotly/` y `js/5. Leaflet/`.
- Si un recurso está comprimido en `.zip`, extráelo antes de abrir el archivo HTML asociado.

## Nota final

Este repositorio está pensado como material didáctico para aprender JavaScript y visualización de datos de manera progresiva, con ejemplos organizados por nivel y temática.
