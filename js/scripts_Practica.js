// Seleccionar contenido 3 formas:

//querySelector -->retorna hasta un elemento que concuerde con el selector que estas
//escribiendo, ejemplo:

const heading = document.querySelector('.texto-header h2')// retorna 0 o 1 elemento
console.log(heading)

//querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
//enlaces[0].textContent = 'nuevo texto'//para poner un nuevo texto en el contenedor
//enlaces[0].href = 'https://google.com' //para asiganar una nueva direccion en el href(se debe poner la url completa)

//enlaces[0].classList.add('clase-nueva');//para agragr una nueva clase
//enlaces[0].classList.remove('clase-nueva');//para remover una clase

//getElementById o por clase
const heading2 = document.getElementById('nombre');
console.log(heading2);

document.getElementsByClassName('navegacion')[0].classList.add('clase-prueba2');

//creando elementos html desde js
const elemento = document.createElement('A')//generamos un nuevo enlace, se recomienda usar mayúsculas en el argumento  
//agregando el href
elemento.href = 'nuevo-enlace.html'

//agragar el texto
elemento.textContent = 'un nuevo enlace'

//agragar la clase
elemento.classList.add('navegacion-enlace')

//agragar el elemento al documento html
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(elemento);

console.log(elemento);





//eventos de los inputs y textArea
/*
const nombre = document.querySelector('#nombre');
nombre.addEventListener('input',function(e){
    console.log(e.target)//para que imprima el elemento donde se encuentra
});*/


const datos = {
    nombre: '',
    E_Mail: '',
    mensaje: ''
}
const name = document.querySelector('#nombre')
const mail = document.querySelector('#E_Mail');
const mess = document.querySelector('#mensaje');

name.addEventListener('input', leerText)
mail.addEventListener('input', leerText);
mess.addEventListener('input', leerText);

function leerText(e){//la variable e se pasa automaticamente con event listener, no hay necesidad de pasarsela como argumento.
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value
    console.log(datos)
}






//EVENTOS

window.addEventListener('load', function(){//load espera a que el js y el archivo html esten listos. En pocas palabras espera a que se cargue toda la pagina
    console.log(2)
});
//otra forma de establecer el load es lo mismo que arriba pero con sintaxis diferente
window.onload = function(){
    console.log(3)
}

document.addEventListener('DOMContentLoaded', function(){//solo espera la descarga del html
    console.log(4)
})

window.onscroll = function(){//se activa cada vez que das scroll
    console.log('scrolling...');
}
/*
const btnEnviar = document.querySelector('.boton-primario');
btnEnviar.addEventListener('click', function(evento){
    console.log(evento)
    evento.preventDefault()//prevee la accion por default,en este caso enviar, si su accion fuera la del llevarnos a otra pag, preventdefault() prevendria la accion.
    console.log('diste click')
})*/

//el evento de submit
const element = document.querySelector('form');
element.classList.add('formulario');

const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    //validar formulario
    const {nombre, E_Mail, mensaje} = datos;

    if(nombre ==='' || E_Mail==='' || mensaje === ''){
        console.log('Por favor llene todos los campos')
    }else{   
        console.log('enviando el formulario')
    }
})


