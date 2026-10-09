const productos = [
    {id:1, nombre:`camiseta`, precio:90 },
    {id:2, nombre:`gorra`, precio:30 },
    {id:3, nombre:`medias`, precio:10 },
    {id:4, nombre:`tanguitas`, precio:100 },
    {id:5, nombre:`papuchos`, precio:300 },
    {id:6, nombre:`pantalon`, precio:150 }
]

const oferta = productos.filter(producto => producto.precio >= 100);
console.log("los productos en oferta", oferta);