# Multiplicador de Números

Este proyecto es una aplicación en Node.js que permite al usuario ingresar un número y luego calcula todos los múltiplos de ese número que están entre 1 y 100. Utiliza la biblioteca `readline` para la entrada de datos desde la consola.

## Descripción

La función `numberMultiples` solicita al usuario un número entero positivo y calcula los múltiplos de ese número que se encuentran en el rango de 1 a 100. Si el número ingresado no es válido, se muestra un mensaje de error.

## Funcionalidad

- Solicita al usuario que ingrese un número.
- Verifica que el número sea un entero positivo y esté en el rango de 1 a 100.
- Calcula y muestra todos los múltiplos del número ingresado dentro del rango especificado.

## Ejemplo de Uso

Para ejecutar la aplicación, simplemente llama a la función `numberMultiples`. Por ejemplo:

```bash
node index.js
```

Cuando se te pida, ingresa un número, por ejemplo:

```
Input a number: 5
```

La salida será:

```
The multiples are: 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100
```

Si el número no es válido, verás un mensaje de error:

```
The entry is not a positive integer or not is between 1 to 100
```

## Instalación

Para utilizar este proyecto, asegúrate de tener [Node.js](https://nodejs.org/) instalado. Luego, sigue estos pasos:

1. Clona el repositorio:

```bash
   git clone https://github.com/karimVillanueva/multiples.git
```

2. Navega al directorio del proyecto:

```bash
   cd multiples
   npm install
   npm start
```

## Test

```bash
   npm test
```

## Requisitos

- Node.js (v12 o superior)

## Licencia

Este proyecto está bajo la Licencia ISC. Para más detalles, consulta el archivo `LICENSE`.

## Autor

- [Karim Villanueva](https://github.com/karimVillanueva/) - Desarrollador principal.
