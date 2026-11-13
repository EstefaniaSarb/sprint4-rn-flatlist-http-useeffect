# Preguntas de reflexión

_Escribe tus respuestas debajo de cada pregunta._

**Alumno:**

---

## Paso 1 · Explorando la API

| Pregunta | Mi respuesta |
|---|---|
| ¿Cuántos personajes trae cada página? | **20 personajes* |
| ¿Qué campo me dice si existe una página siguiente? | *info.next* |
| ¿Qué valor tiene ese campo en la última página? | *null* |
| ¿Qué código HTTP devuelve una búsqueda sin resultados? | *código 404 "error": "There is nothing here"* |
| ¿Qué campos del personaje usa `CharacterCard`? | *name, status, species, image* |

## Paso 2 · Petición HTTP

**¿Qué diferencia hay entre que `fetch` "falle" y que el servidor responda con un error? ¿Qué debo revisar en la respuesta?**
*Cuando el `fetch` falla es porque hubo algun problema por lo cual no se logra completar la petición, si el servidor responde con un error si logró terminar la petición pero hay problemas con los datos de la API*
> 

## Paso 3 · Estado

**¿Por qué guardo los personajes en estado y no en una variable normal?**
*Usando estados al cambiar y utilizar set, se le avisa a React que debe volver a renderizar la pantalla con datos nuevos, y una variable normal no hace eso. Además, el estado se conserva entre renders, mientras que una variable normal se reinicia cada vez que el componente se ejecuta.*
> 

## Paso 4 · useEffect

1. **¿Qué pasa si omito por completo el arreglo de dependencias?**

> 

2. **¿Qué significa dejar el arreglo vacío?**

> 

3. **¿Por qué la función que recibe `useEffect` no debe ser `async` directamente?**

> 

## Paso 5 · FlatList

1. **¿Para qué sirve la prop que extrae la llave de cada elemento?**

> 

2. **¿Por qué usar `FlatList` en lugar de un `ScrollView` con `.map()`?**

> 

## Paso 6 · Carga y error

**¿Por qué es mejor mostrar un mensaje con un botón "Reintentar" que dejar la pantalla vacía?**

> 

## Paso 8 · Paginación

**¿Qué problema aparece si la función de "cargar más" se dispara varias veces seguidas? ¿Cómo lo evité?**

> 

## Paso 9 · Pull to refresh

**¿Por qué usé un estado distinto (`refreshing`) y no el mismo de la carga inicial?**

> 

## Paso 10 · Búsqueda

1. **¿Qué es el debounce y qué problema resuelve?**

> 

2. **¿Para qué sirve la función de limpieza (cleanup) que se devuelve en un `useEffect`? Da un ejemplo de esta práctica.**

> 

3. **Si el usuario escribe rápido y las respuestas llegan en desorden, ¿qué podría salir mal?**

> 

## Cierre

**Menciona dos mejoras que le harías a la app si tuvieras una hora más:**

> 
