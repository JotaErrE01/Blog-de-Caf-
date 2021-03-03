const datos = {
    nombre: '',
    E_Mail: '',
    mensaje: ''
};

document.querySelector('form').classList.add('formulario');

const formulario = document.querySelector('.formulario');
const nombre = document.querySelector('#nombre');
const E_Mail = document.querySelector('#E_Mail');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', GetText);
E_Mail.addEventListener('input', GetText);
mensaje.addEventListener('input', GetText);

formulario.addEventListener('submit', Validacion);


function GetText(event){
    datos[event.target.id] = event.target.value
}

function Validacion(event){

    event.preventDefault();

    const {nombre, E_Mail, mensaje} = datos;//destructoring

    if(nombre === '' || E_Mail === '' || mensaje === ''){
        Alerta('Por favor llene todos los campos', 'error');
    }else{
        Alerta('se ha enviado el mensaje satisfactoriamente','envio');
    }
}

function Alerta(mensaje, validacion){
    const alerta = document.createElement('P');
    const contenedor = document.createElement('DIV');
    contenedor.classList.add('centrar-text');
    alerta.textContent = mensaje;
    alerta.classList.add(validacion);
    formulario.appendChild(contenedor);
    contenedor.appendChild(alerta)
    setTimeout(()=>contenedor.remove(),3000)
}

