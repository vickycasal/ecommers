const formulario = document.getElementById("agregarProducto");
const inputs = document.querySelectorAll('#agregarProducto input');

const expresiones = {
    nombre:/^[a-zA-Z\s]{1,40}$/,
    precio:/^.{1,6}$/,
    descripcion:/^[a-zA-Z\s]{1,120}$/,
}

const campos={
    nombreProducto:false,
    precioProducto: false,
    descripcionProducto:false,
}

const validarFormulario = (event) =>{
    switch(event.target.name){
        case "nombreProducto":
            validarCampo(expresiones.nombre, event.target, "nombreProducto")
        break
        case "precioProducto":
            validarCampo(expresiones.precio, event.target, "precioProducto")
        break
        case "descripcionProducto":
            validarCampo(expresiones.descripcion, event.target, "descripcionProducto")
        break
    }
}

const validarCampo = (expresion, input, campo) =>{
    if(expresion.test(input.value)){
        document.getElementById(`grupo2__${campo}`).classList.remove('formulario__grupo2-incorrecto');
        document.getElementById(`grupo2__${campo}`).classList.add('formulario__grupo2-correcto');
        document.querySelector(`#grupo2__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo2__${campo} i`).classList.add('fa-check-circle')
        document.querySelector(`#grupo2__${campo} .formulario__input-error2`).classList.remove('formulario__input-error2-activo')
        campos[campo] = true;
    } else {
        document.getElementById(`grupo2__${campo}`).classList.add('formulario__grupo2-incorrecto');
        document.getElementById(`grupo2__${campo}`).classList.remove('formulario__grupo2-correcto');
        document.querySelector(`#grupo2__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo2__${campo} i`).classList.remove('fa-check-circle')
        document.querySelector(`#grupo2__${campo} .formulario__input-error2`).classList.add('formulario__input-error2-activo')
        campos[campo] = true;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur',validarFormulario)    
})


const btn = document.querySelector("#btn-producto").onclick = function(event){
    event.preventDefault();
    if (campos.nombreProducto && campos.precioProducto && campos.descripcionProducto){
             window.location.href ="./productos.html"
    }else{
        document.querySelector(".formulario__mensaje2").classList.add('formulario__mensaje2-activo')
        document.querySelector(`#grupo2__${campo}  .formulario__input-error2`).classList.remove('formulario__input-error2-activo')
    }
};