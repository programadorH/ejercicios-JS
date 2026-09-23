export function sumar(a,b){
    alert(`El resultado de la suma es: ${a + b}`);
}
export function restar(a, b){
    alert(`El resultado de la resta es: ${a - b}`);
}
export function multiplicar(a, b){
    alert(`El resultado de la multiplicación es: ${a * b}`);
}
export function dividir(a, b){
    if(b===0){
    alert(`División inválida, no divida por cero`);
    return;
    }
    alert(`El resultado de la División es: ${a / b}`);
}