import {sumar, restar, multiplicar, dividir} from "./funciones.js";

const SALIR = "mayday";
let palabra;
let contador = 0;
do {
    let opcion = parseInt(prompt("Que deseas realizar, selecciona una opción: \n 1. Suma. \n 2. Restar. \n 3. Multiplicar. \n 4. Dividir. \n 5. Salir."));
    
    if( opcion != 5 ){
      let numero1 = parseInt(prompt("Dame un número"));
      let numero2 = parseInt(prompt("Dame otro número"));
    }
    

    switch (opcion) {
        case 1:
            sumar(numero1, numero2);
            break;
        case 2:
            restar(numero1, numero2);
            break;
        case 3:
            multiplicar(numero1, numero2);
            break;
        case 4:
            dividir(numero1, numero2);
            break;
        case 5:
            console.log("Salir");
            palabra = prompt("Palabra clave para salir")
            break;
        default:
            console.log("Escribi bn omee!");
            break;
    }
    contador++;
    console.log("estoy en el ciclo");
} while (!(palabra === SALIR));
alert(`Saliste de la aplicación, la usaste ${contador} veces`);