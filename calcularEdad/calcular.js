export function calcularEdad(anioNacimiento){
    const anioActual=2026
    return anioActual - anioNacimiento 
}

export function esMayorEdad(edad){

  /*   return edad >= 18  */

    if (edad >= 18){
        return true
    }else{
         return false
    }
}