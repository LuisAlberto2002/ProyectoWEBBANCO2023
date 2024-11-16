const button = document.getElementById('Actualizar');

button.addEventListener('click',(e)=>{
    e.preventDefault();
    const rfc = document.getElementById('RFC');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const newRFC = document.getElementById('RFC-new');
    $.ajax({
        type: "PUT",
        url: "http://localhost:3000/actualizar_cliente",
        data: JSON.stringify({
            rfc:rfc.value,
            name:name.value,
            email:email.value,
            password: password.value,
            newRFC:newRFC.value
        }),
        dataType: "application/json",
        success: function (response) {
            alert("Datos del usuario actualizados");
            name.value='';
            rfc.value='';
            email.value='';
            password.value='';
            newRFC.value='';
        }, error:(err)=>{
            console.log(err);
            alert("Error al actualizar los datos");
        }
    });

})