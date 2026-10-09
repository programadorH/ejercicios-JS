const filaBanco = ["Juan Caqui", "Martina la peligrosa", "don Darío"];

filaBanco.push("Valentino");
console.log(filaBanco);

filaBanco.unshift("Roberta");
console.log(filaBanco);

const clienteAtendido = filaBanco.shift();
console.log(clienteAtendido);
console.log(filaBanco);
