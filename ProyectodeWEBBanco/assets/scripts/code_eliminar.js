const button = document.getElementById('submit');
const cryptojs = require('crypto-js');
const key = process.env.key;

button.addEventListener('click',(e)=>{
    e.preventDefault();
    const rfc = cryptojs.AES.encrypt(document.getElementById('RFC').value,key)
    const url = "http://localhost:3000/eliminarCliente";
    

    $.ajax({
        type: "PUT",
        contentType: "application/json",
        dataType: "json",
        url: url,
        data: JSON.stringify({
            rfc:rfc
        }),
        success: function (response) {
            alert("Usuario eliminado exitosamente");
            rfc = '';
        },
        error: (err)=>{
            alert("El usuario no se pudo eliminar");
            console.log(err);
        }
        
    });
});



