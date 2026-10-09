const carritoCompras = [
    {id:1, producto:"ipad", precio:1300, categoria:"Tecnología"},
    {id:2, producto:"libro", precio:40, categoria:"Educación"}
];

const nuevoProducto = {id:3, producto:"laptop", precio:500, categoria:"Tecnología"};
carritoCompras.push(nuevoProducto);

console.log(carritoCompras);

const productoTecnologico = carritoCompras.filter(item => item.categoria === "Tecnología");
console.log(productoTecnologico);

const primerItem = carritoCompras[0];
const {producto, precio} = primerItem;

console.log(`lleve hoy ${producto} por $${precio}`);