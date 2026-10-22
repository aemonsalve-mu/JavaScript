# Ejemplo de Practica

1. Seleccionar y descargar la serie de tiempo de tres activos financieros del ibex 35 , incluido el indice Ibex-35.
2. Seleccionar y descargar tres call options del mercado de valores estadounidense. 

**NOTA: (los activos y las call options a seleccionar, son los que considere opoortuno)**


Una vez obtenidas estas series, en el formato que consideren más oportuno (se sugiera en un archivo tipo JSON), llevar a cabo dos conjuntos de visualizaciones.


## Visualización 1
- Hacer su representación gráfica de forma simultanea de los activos del ibex y su índice.
- Representgar en un mismo gráfico la evolución temporal de las call options del mercado de USA. 

Aplicar técnicas de storytelling y buenas práctias.

## Visualización 2
- Incluir gráficos adicionales y construir un cuadrp de mandos acerca de información relevante de las series seleccionadas. 



# Conceptos básicos

## 1. Opcion Call
Una opción Call es un derivado financiero que otorga a su comprador el derecho *(pero no la obligación)* de adquirir un activo subyacente (como una acción) a un precio fijo predeterminado (strike price) hasta una fecha límite específica (vencimiento), a cambio del pago de una tarifa inicial llamada prima.

## Activo financiero
Un activo financiero tradicional *(como una acción del Ibex 35)* representa una propiedad directa del capital o deuda de una empresa con vigencia indefinida.

## Comparación Directa: Activos del Ibex 35 vs. Call Options de Wall Street

Para entender mejor sus diferencias operativas, estructurales y de riesgo, evaluemos cómo funciona una inversión directa en acciones españolas frente al ecosistema de opciones de la bolsa estadounidense:


|**Característica**	 | **Activos del Ibex 35 (Acciones Directas)**	 | **Call Options de Wall Street (Opciones de Compra)** |
|----------------|-------------------------------------------|--------------------------------------------------|
|**Naturaleza**	     | Propiedad real de una fracción de la empresa (ej. Telefónica, Santander). |	Contrato de derecho de compra sobre acciones de EE.UU. (ej. Apple, Tesla).|
**Estructura del lote**|	Se puede comprar desde 1 sola acción.|	Se negocia en contratos; cada lote equivale estrictamente a 100 acciones.
**Vencimiento**|	Indefinido. Puedes mantener las acciones durante décadas si lo deseas.|	Fecha de expiración fija (días, semanas o meses). Si no se ejerce, expira con valor cero.
**Apalancamiento**|	No tiene (1:1). Si la acción sube 1€, tu beneficio es de 1€ por acción.|	Muy alto. Una pequeña prima controla 100 acciones, multiplicando las ganancias porcentuales.
**Derechos económicos**|	Tienes derecho a cobrar dividendos y emitir votos corporativos.|	No cobras dividendos ni tienes derechos políticos sobre la empresa.
**Pérdida Máxima** |	El capital total invertido (solo si la empresa quiebra y su valor cae a cero).|	Limitada exclusivamente a la prima pagada (al comprar el contrato Call).
**Impacto del Tiempo**|	El paso del tiempo es neutral; mantener la acción no reduce su valor de mercado intrinséco.|	El tiempo juega en contra (Time Decay). El valor del contrato disminuye cada día que pasa.


## Ejemplo práctico para diferenciarlos

- Comprar una acción del Ibex 35 (ej. Iberdrola): Compras 100 acciones a 12 € cada una (Inversión: 1.200 €). Si la empresa sube a 15 €, ganas 300 €. Si baja, puedes esperar años a que se recupere mientras cobras sus dividendos.
- Comprar una Call Option de Wall Street (ej. Apple): Pagas una prima de 5 € por el derecho a comprar Apple a un strike de 180 € antes del próximo mes. Controlas 100 acciones invirtiendo solo 500 € (5 € x 100). Si Apple se dispara a 200 €, tu contrato se valoriza masivamente. Pero si la acción se queda en 179 € al vencimiento, el contrato expira valiendo 0 € y pierdes los 500 € de forma definitiva.

En algunos casos se puede incorporarar derivados a este portafolio para profundizar o llevar a a cabo una determinada estrategia. 

¿Con qué objetivo?:  En algunos casos se buscan estas opciones para especular con el precio a corto plazo o como cobertura para proteger acciones que ya se poseen.

// https://opcionescallyput.com/diferencia-entre-acciones-y-opciones/