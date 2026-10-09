let playlist = [`Bohemian Rhapsody`, `Stairway to Heaven`, `Hotel California`];
console.log(playlist[2]); //acceder a una posición del array

playlist[1] = `heaven to heaven`; //editar un elemento del array
console.log(playlist);

console.log(playlist.length); //cuantos elementos hay 

console.log(playlist.sort()); //ordena el array por orden alfabetico

playlist.push(`African reggae`); //agrega al final
console.log(playlist);

playlist.pop(); // elimina al final 
console.log(playlist);

playlist.unshift(`Imagine`); // agrega al inicio
console.log(playlist);

playlist.shift(); //elimina al inicio
console.log(playlist);

playlist.forEach(function(cancion, index){    //recorre cada posicion del arreglo
    console.log(`la cancion ${cancion} esta en la posicion ${index}` );
})

let playlist2 = playlist.map(function(cancion){
    return
})

let total = playlist.reduce(function(total, una){ // reduce a un unico valor
    return total + una ;
})

playlist.find();  //devuelve el primer elemento que cumple la condicion
playlist.some();  // devuelve true si al menos un cumple
playlist.every();  // devuelve true si todos cumplen 




const usuario = {
    nombre: 'Carlos Rodriguez',
    edad: 32,
    esEstudiante: false,
    cursos: ['HTML', 'CSS', 'JavaScript'],
    direccion: {
    calle: 'Av. Siempre Viva',
    numero: 123
    },

    saludar: function() {
        console.log('¡Hola mundo!');
    }
};


console.log(`usuario.cursos`);


usuario.edad = 35;
usuario.username = `carlos_cacorro`;