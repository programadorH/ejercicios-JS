/* const nombreUsuario = document.getElementById(`nombre`);
nombreUsuario.textContent=`Dario Antonio Roberto Jesús`

const descripcionUsuario = document.getElementById(`descripcion`);
descripcionUsuario.innerHTML=`Esta es una <strong>   descripcion actualizada   ...  </strong> y en negrita`;

const enlace = document.getElementById(`mi-enlace`);
const imagen = document.getElementById(`mi-imagen`);

enlace.href=`https://www.vans.com/en-us/c/mens/shoes-1100`;
enlace.textContent=`Ir a Vans oficial`;

imagen.src=`https://brand.assets.adidas.com/image/upload/global_tennis_fw26_spsp_fw26_launch_iwp_all_statement_card_2_m_d28e1e7ebc.jpg`
imagen.alt=`otra descripcion`; */


const imagen = document.getElementById(`mi-imagen`);
imagen.setAttribute(`alt`, `ejemplo para cambiar descripción`);
imagen.setAttribute(`class`, `imagen-principal`);


const enlace = document.getElementById(`mi-enlace`);
const destinoEnlace=enlace.getAttribute(`href`);
console.log(destinoEnlace);



const titulo = document.getElementById(`titulo`);
titulo.style.color=`crimson`;
titulo.style.fontSize=`32px`;

const parrafo =document.getElementById(`parrafo`);
parrafo.classList.add("destacado");
