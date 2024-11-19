const button=document.getElementById('registrar');
//import CryptoJS from "crypto-js";
const CryptoJS = require('crypto-js');
//const key = '4505';
const key = process.env.KEY;


/*const mensaje = "Este es un mensaje secreto";
const clave = "ClaveSecreta123";

// Ciframos el mensaje utilizando AES
const mensajeCifrado = CryptoJS.AES.encrypt(mensaje, clave).toString();

console.log(mensajeCifrado); // Imprime el mensaje cifrado en la consola
*/
button.addEventListener('click',(e)=>{
    e.preventDefault();
    //const url='http://localhost:3000/admins/agregarCliente/';
    const url='http://localhost:3000/agregar_Cliente';
    const name=document.getElementById('name');
    const rfc=document.getElementById('RFC');
    const email=document.getElementById('email');
    const password=document.getElementById('password');
    const rol=document.getElementById('role');
    const status = "Activo";
    const datos = [name.value,rfc.value,email.value,password.value,rol.value,status];
    const datosC =[];
    for(i=0;i<6;i++){
        datosC.push(CryptoJS.AES.encrypt(datos[i],key));
    }
    console.log(datosC);

    $.ajax({
        url:url,
        type:'POST',
        data:JSON.stringify({
            name:datosC[0],
            rfc:datosC[1],
            email:datosC[2],
            password:datosC[3],
            rol:datosC[4],
            status:datosC[5]
        }),
        contentType:"application/json",
        dataType:'json',
        success: (response) => {
            name.value='';
            rfc.value='';
            email.value='';
            password.value='';
            rol.value='';
            
            alert('Usuario creado exitosamente');
        },
        error: () => {
            alert('error');
        }
        //terminar edicion
    });

})