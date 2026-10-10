const listaTareas = [
    { id: 1, texto: "Aprender HTML", completada: true },
    { id: 2, texto: "Aprender CSS", completada: true },
    { id: 3, texto: "Dominar React", completada: false }
];

const tareasActualizadas = { id: 4, texto: "EstudiarAPIs", completada: false };
const nuevaTarea = [...listaTareas, tareasActualizadas];
console.log(nuevaTarea);

const tareasPendientes = nuevaTarea.filter(pendiente => pendiente.completada === false);
console.log(tareasPendientes);

const renderizar = tareasPendientes.map (({texto}) => {
    return `<li class='pendiente'>${texto}</li> `
});
console.log(renderizar);