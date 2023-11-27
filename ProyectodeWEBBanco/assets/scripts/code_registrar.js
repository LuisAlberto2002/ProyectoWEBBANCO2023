const button=document.getElementById('registrar');

button.addEventListener('click',(e)=>{
    e.preventDefault();
    const url='http://localhost:3000/admins/agregarCliente/';
    const name=document.getElementById('name');
    const edad=document.getElementById('edad');
    const rfc=document.getElementById('rfc');
    const email=document.getElementById('email');
    const password=document.getElementById('password');
    const rol=document.getElementById('rol');
    const newUser={
        name:name.value,
        edad:edad.value,
        rfc:rfc.value,
        email:email.value,
        password:password.value,
        rol:rol.value
    }
    $.ajax({
        url:url,
        type:'POST',
        data:JSON.stringify({newUser}),
        contentType:"application/json",
        dataType:'json',
        success: (response) => {
            console.log(response);
            alert('funciona')
        },
        error: () => {
            alert('error');
        }
        //terminar edicion
    });
    name.value='';
    edad.value='';
    rfc.value='';
    email.value='';
    password.value='';
    rol.value='';
})