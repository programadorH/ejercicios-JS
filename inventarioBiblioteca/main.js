const inventarioLibros = [
    {titulo:"El lobo Estepario", autor:"Hermann Hesse", disponible:false},
    {titulo:"Aves Migratorias", autor:"Mariana Oliver", disponible:false},
    {titulo:"La casa de los Espiritus", autor:"Isabell Allende", disponible:true},
    {titulo:"primer amor", autor:"Samuel Berckett", disponible:false}
];

inventarioLibros.push({titulo:"El programador pragmático", autor:"David Thomas", disponible:true});
console.log(inventarioLibros);

const librosDisponibles = inventarioLibros.filter(disponible => disponible.disponible === true);
console.log(librosDisponibles);


const {titulo, autor} = librosDisponibles[0];
console.log(`El libro disponible es ${titulo} del autor ${autor}`);