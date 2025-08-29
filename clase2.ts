/* Practica recomendada en JavaScript */
const errorTypes = {
  NOT_FOUND: "Not Found",
  UNAUTHORIZED: "Unauthorized",
  FORBIDDEN: "Forbidden",
  INTERNAL_SERVER_ERROR: "Internal Server Error",
};

const mostrarMensaje = (tipoError) => {
  if (tipoError === errorTypes.NOT_FOUND) {
    console.log("Error 404: Recurso no encontrado");
  } else if (tipoError === errorTypes.UNAUTHORIZED) {
    console.log("Error 401: No autorizado");
  } else if (tipoError === errorTypes.FORBIDDEN) {
    console.log("Error 403: Prohibido");
  } else if (tipoError === errorTypes.INTERNAL_SERVER_ERROR) {
    console.log("Error 500: Error interno del servidor");
  }
};

/* Practica recomendada en TypeScript */

const enum ErrorType { //Enum se usa para una coleccion finita de constantes
  NOT_FOUND = "Not Found",
  UNAUTHORIZED = "Unauthorized",
  FORBIDDEN = "Forbidden",
  INTERNAL_SERVER_ERROR = "Internal Server Error",
}

function mostrarMensaje2(tipoError: ErrorType) {
  if (tipoError === ErrorType.NOT_FOUND) {
    console.log("Error 404: Recurso no encontrado");
  } else if (tipoError === ErrorType.UNAUTHORIZED) {
    console.log("Error 401: No autorizado");
  } else if (tipoError === ErrorType.FORBIDDEN) {
    console.log("Error 403: Prohibido");
  } else if (tipoError === ErrorType.INTERNAL_SERVER_ERROR) {
    console.log("Error 500: Error interno del servidor");
  }
}

mostrarMensaje2(ErrorType.NOT_FOUND);

/*Asercion de tipos 
Es una forma de decirle a TypeScript "confía en mí, sé lo que estoy haciendo"*/

/*** MAL HECHO */

const canvas = document.getElementById("miCanvas") as HTMLCanvasElement; //LO ponemos como HTMLCanvasElement para decirle que realmente es un canvas, pero esta mal porque perdimos la comprobacion de que puede ser null, aprte ni siquiera sabemos si si obtuvimo n camvas y no un p pro ejemplo asi que no se puede transformar

// Canvas puede ser null si no lo encuentra o HTMLElement si lo encuentra (por eso lo transformamos a HTMLCanvasElement)

//Como sabe TypeScript que en realidad es un canvas?

if (canvas) {
  //Siempre entra porque nunca es null
  const contexto = canvas.getContext("2d");
}

/*BIen hecho */
const canvas2 = document.getElementById("miCanvas");

if (canvas2 instanceof HTMLCanvasElement) {
  //Aqui si comprobamos que es un canvas
  const contexto = canvas2.getContext("2d"); //TypeScript usa la inferencia, porque sabemos que solo podemos ojecuta esta funcion si efectivamente es un canvas, si no no, y no truena, porque lee la validacion del if
}

/*Interface
Forma para definir los contratos que deben seguir al igual que con type pero con pequeñas diferencias, ya que puede extender productos mas facil, pero se pueden crear dos interfaces con el mismo nombre sin que de error.

Las interfaces tambien desaparecen cuando se hace la conversion a javascript, no son validaciones.

Con interfaces no se puede hacer tipos rpimitidovs como nventarnos nuestro tipos.

*/

interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

interface Zapatilla extends Producto {
  talla: number;
  color: string;
}

interface Carrito {
  productos: Producto[];
  total: number;
}

interface CarritoOps {
  addProducto(producto: Producto): void;
  removeProducto(id: number): void;
  calcularTotal(): number;
}

const carrito: Carrito = {
  productos: [
    { id: 1, nombre: "Producto 1", precio: 100 },
    { id: 2, nombre: "Producto 2", precio: 200 },
    { id: 3, nombre: "Producto 3", precio: 300 },
  ],
  total: 600,
};

//Narrowing es una tecnica para refinar el tipo de una variable en tiempo de ejecucion, permitiendo acceder a propiedades o metodos que son especificos de un tipo en particular.

function mostrarLongitud(obj: string | string[]) {
  if (typeof obj === "string") {
    // Es intentar descartar los tipos para que no se produzca un error, al querer usar una funcion que no existe debajo
    console.log("Longitud de la c adena:", obj.length);
  } else {
    console.log("Longitud del arreglo:", obj.length);
  }
}
