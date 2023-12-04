const button=document.getElementById('insert');
const url='https://inverlat-com.onrender.com/agregar_cliente';
button.addEventListener('click',(event)=>{
    event.preventDefault();
    const name=document.getElementById('name');
    const email=document.getElementById('name');
    const password=document.getElementById('password');
    const rfc=document.getElementById('RFC');
    const role=document.getElementById('role');
    $.ajax({
        url:url,
        type:'POST',
        data:JSON.stringify({
            name: name.value,      
            email: email.value+"@inverlat.com",
            password: password.value,
            rfc: rfc.value,
            role: role.value
        }),
        contentType:"application/json",
        dataType:'json',
        success: (response) => {
            name.value='';     
            email.value='';
            password.value='';
            rfc.value='';
            role.value='';
            alert('Usuario creado exitosamente');
        },
        error: () => {
            alert('error');
        }
    
    });

})