const button=$('#ingresar')[0];
//const url='https://inverlat-com.onrender.com/login';
const url='http://localhost:3000/login';

button.addEventListener('click',function(e){
    e.preventDefault();
    const email=document.getElementById('email');
    const passwd=document.getElementById('password');
    $.ajax({
        url:url,
        type:'POST',
        data:JSON.stringify({
            email:email.value,
            password:passwd.value,
        }),
        contentType:"application/json",
        dataType:'json',
        success: (response) => {
            const token = response.token;
            
            if(response.role=="Administrador"){
                alert("!USUARIO VERIFICADO!");
                
                document.cookie = 'Token=' + token + '; path=/';
                window.open('vistaAdmin.html','_self');  
            }else if(response.role=="cliente"){
                alert("!USUARIO VERIFICADO!");
                window.open('user.html','_self');
            }
        },
        error: (err) => {
            console.log('Error: ',err);
        }
    });
    //const token=localStorage.getItem('token');

    /*$.get('http://localhost:3000/login',(data)=>{
        data.forEach(d=>{
            if(email.value==d.email && passwd.value==d.password){
                $.ajax({
                    url:'http://localhost:3000/loginToken',
                    type:'POST',
                    data:JSON.stringify({
                        email:email.value
                    }),
                    contentType:"application/json",
                    dataType:'json',
                    success: (response) => {
                        console.log(response);
                    },
                    error: (err) => {
                        console.log('Error: ',err);
                    }
                });
                if(d.role=="Administrador"){
                    alert("!USUARIO VERIFICADO!");
                    window.open('file:///C:/Users/vulpe/OneDrive/Escritorio/ProyectoFinalWEB/ProyectodeWEBBanco/user.html','_self');  
                }else if(d.role=="cliente"){
                    alert("!USUARIO VERIFICADO!");
                    window.open('file:///C:/Users/vulpe/OneDrive/Escritorio/ProyectoFinalWEB/ProyectodeWEBBanco/user.html','_self');
                }else if(d.role=="servicio"){
                    alert("!USUARIO VERIFICADO!");
                    window.open('file:///C:/Users/vulpe/OneDrive/Escritorio/ProyectoFinalWEB/ProyectodeWEBBanco/user.html','_self');
                }
            }
            if(email.value==d.email && passwd.value==d.password){
                console.log(email.value);
                if(d.role=="cliente"){
                    alert("!USUARIO VERIFICADO!");
                    window.open('file:///C:/Users/vulpe/OneDrive/Escritorio/ProyectoFinalWEB/ProyectodeWEBBanco/user.html','_self');  
                }
                else if(d.role=="Administrador"){
                    alert("!USUARIO VERIFICADO!");
                    window.open('file:///C:/Users/vulpe/OneDrive/Escritorio/ProyectoFinalWEB/ProyectodeWEBBanco/user.html','_self');
                }else if(d.role=="servicio"){
                    alert("!USUARIO VERIFICADO!");
                    window.open('file:///C:/Users/vulpe/OneDrive/Escritorio/ProyectoFinalWEB/ProyectodeWEBBanco/user.html','_self');
                }
            }
        })

    });*/


    //Peticion post hacia el middleware de autenticacion donde se compararan los datos ingresados con el usuario y contrase;a de las
    //bases de datos.
})
