let deseo=3;
do{
    alert(`Soy el genio de la lámpara tienes 3 deseos`);
    
}
while(deseo > 0 ){
    
   console.log(`Te quedan ${deseo}deseos`);
   prompt(`Dame tu deseo`);
   deseo--;
}
console.log(`${concedido}Tus deseos están cumplidos`); 






let numero = parseInt(prompt("Dame un numero"));
for(let index = 1; index <= 10; index++){
    console.log(index * numero);
} 
