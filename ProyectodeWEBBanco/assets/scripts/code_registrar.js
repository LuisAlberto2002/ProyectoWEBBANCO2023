const button=document.getElementById('registrar');

/*async function Upload_user(){
    const name=document.getElementById('name');
    const rfc=document.getElementById('RFC');
    const email=document.getElementById('email');
    const password=document.getElementById('password');
    const rol=document.getElementById('rol');
    const newUser={
        name:name.value,
        rfc:rfc.value,
        email:email.value,
        password:password.value,
        rol:rol.value,
        status:"Activo"
    }
    let data = await fetch("/agregar_cliente",  {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
         body: JSON.stringify(newUser)

    })
    
}*/

button.addEventListener('click',(e)=>{
    e.preventDefault();
    //const url='http://localhost:3000/admins/agregarCliente/';
    const url='http://localhost:3000/agregar_Cliente';
    const name=document.getElementById('name');
    const rfc=document.getElementById('RFC');
    const email=document.getElementById('email');
    const password=document.getElementById('password');
    const rol=document.getElementById('role');
    $.ajax({
        url:url,
        type:'POST',
        data:JSON.stringify({
            name:name.value,
            rfc:rfc.value,
            email:email.value,
            password:password.value,
            rol:rol.value,
            status:"Activo"
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