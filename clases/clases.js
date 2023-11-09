class persona{
    nombre='';
    apellido='';
    estatura=0;
    edad=0;
    peso=0;

    constructor(nombre,apellido,estatura,edad,peso){
        this.nombre=nombre;
        this.apellido=apellido;
        this.estatura=estatura;
        this.edad=edad;
        this.peso=peso;
    }
    hablar(mensaje){
        console.log(mensaje);
    }
    caminar(pasos){
        console.log('Estoy caminando');
    }

}

const p1=new persona('jose','Peres',1.70,17,110);
console.log(p1);
p1.hablar('Hola a todos');