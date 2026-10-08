const esAdulto= edad => edad >= 18 ;
let edad = parseInt(prompt(`ingrese su edad `));

if (esAdulto(edad)) {
    alert(`Acceso permitido`);
}else{
    alert(`Acceso denegado`);
}