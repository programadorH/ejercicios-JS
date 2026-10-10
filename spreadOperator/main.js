const carritoAntiguo = ["Laptop", "Mouse"];
const CarritoActualizado = [...carritoAntiguo, "Teclado"];
console.log(carritoAntiguo);
console.log(CarritoActualizado);

const servidor = {
    host:"localhost",
    puerto:8080,
    db:{user:"admin", pass:"1234"}
};

const {host: url, puerto, ssl=true}=servidor;
console.log(servidor);
console.log(url);
console.log(ssl);

const {db:{user}}=servidor;
console.log(user);


const precios = [100, 200, 300];
const preciosConIva=precios.map(precio => precio*1.19);
console.log(preciosConIva);