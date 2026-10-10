const baseDeDatos = [
    {id:1, titulo:"JavaScriptNinja", precio:40, stock:true},
    {id:2, titulo:"Reac Avanzado", precio:60, stock:false},
    {id:3, titulo:"CSS Master", precio:30, stock:true}
];

const disponibles = baseDeDatos.filter(stock => stock.stock === true);
console.log(disponibles);

const catalogoHTML = disponibles.map (({titulo, precio}) => {
    return`
    <article class="card">
         <h3> ${titulo}</h3>
         <p>Precio:$${precio}</p>
         <button>Comprar</button>
    </article>`
});
console.log("Tarjetas listas para inyectar al DOM", catalogoHTML);

const nuevoLibro = {id:4, titulo:"NodeJS Backend", precio:50, stock:true};

const nuevaBaseDeDatos = [...baseDeDatos, nuevoLibro];
console.log(nuevaBaseDeDatos);