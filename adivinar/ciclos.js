let aleatorio = Math.flor(Math.random() * 10) + 1;
alert("Adivinar el número aleatorio 1");
let aleatorio2 = Math.flor(Math.random() * 10) + 1;
alert("Adivinar el número aleatorio 2");

let intentos = 3;
let condicion = true;


do {
    let numeroUsuario = parseInt(prompt("Dame un número"));
    if (numeroUsuario === aleatorio){
        console.log("Adivinaste");
        condicion= false;
    }else {
        confirm.log("sigue intentando")
        intentos--;
    }
    if (intentos <= 0){
        console.log("se acabaron los intentos");
        condition = false;
    }
}while (condition);