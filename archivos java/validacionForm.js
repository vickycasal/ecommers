//validacion formulario login
const formulario = document.getElementById("formularioCompleto");
const inputs = document.querySelectorAll('#formularioCompleto input');


const expresiones = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]+$/,
    password:/^.{6,12}$/,
}

const campos = {
    correo:false,
    password:false
}

const validarFormulario = (event)=>{
   switch(event.target.name){
       case "correo":
           validarCampo(expresiones.email, event.target, "correo")
       break;
       case "password":
        validarCampo(expresiones.password, event.target, "password")

       break;
   }
}

const validarCampo = (expresion, input, campo) =>{
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle')
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo')
        campos[campo] = true;
    } else{
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle')
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo')
        campos[campo]= false;
    }            
}

inputs.forEach((input) => {  
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})

// validacion boton login
const btn = document.querySelector("#btn-entrar").onclick = function(event){
    event.preventDefault();
    if (campos.correo && campos.password){
        window.location.href= "./index.html";           
    }else{
        document.querySelector(".formulario__mensaje").classList.add('formulario__mensaje-activo')
        document.querySelector(`#grupo__${campo}  .formulario__input-error`).classList.remove('formulario__input-error-activo')
    }
};