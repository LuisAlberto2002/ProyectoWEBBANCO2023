let datos=[];
datos.push(1);
datos.push(2);
datos.push(3);
datos.push(4);
datos.push(5);
datos.push(6);
datos.push(7);
console.log(datos);
//la funcion map permite obtener una copia del arreglo
const nuevoarreglo=datos.map(function(n) {
    //console.log(n);
    return ++n;
})
//const nuevoarreglo = datos;
nuevoarreglo.push(100);
console.log(nuevoarreglo);

const pares=datos.filter(function(n) {
    return n%2===0;
})
console.log(pares);

//Va acumulando el dato actual con el anterior.
const resultados = datos.reduce(function(a,n){
    return a+n;
})
console.log(resultados);