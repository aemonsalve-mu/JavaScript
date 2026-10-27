# Objetos y Métodos en JavaScript (POO)

## 1. ¿Qué es un Objeto?

Un **objeto** es una estructura de datos que agrupa propiedades relacionadas para representar una entidad. Funciona como una colección de pares **clave : valor**.

* **Propiedad:** Es el estado o característica (datos).

```javascript
// Ejemplo de objeto
const coche = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2022
};
```

## 2. ¿Qué es un Método?

Un **método** es simplemente una **función asociada a un objeto**. Representa la capacidad de acción o el comportamiento del objeto.

```javascript
// Ejemplo de objeto con un método
const coche = {
  marca: "Toyota",
  
  // Este es el método
  arrancar: function() {
    console.log("El coche está arrancando...");
  }
};

// Invocación del método
coche.arrancar(); // Imprime: "El coche está arrancando..."
```

## En Resumen

* **Objeto:** Define **qué es** o **cómo es** algo (sus propiedades y estado).
* **Método:** Define **qué hace** ese objeto (sus acciones y comportamientos).

---

## 📽️ Recursos en Video Corto

Si deseas ver una explicación visual rápida y práctica sobre este tema, puedes consultar estos contenidos:

* 🎬 **[24 TIPS de JAVASCRIPT para aprender desde cero](http://www.youtube.com/watch?v=jJeWLNg0go0&start=26)** – Canal: *Programación en español*
* 🎬 **[Programación orientada a objetos](http://www.youtube.com/watch?v=SI7O81GMG2A&start=5)** – Canal: *freeCodeCamp Español*