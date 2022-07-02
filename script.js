'use strict'

const user = "C001@edusuyay.pe";
const pass = "edusuyay";

const campoUser = document.querySelector(".user-input");
const campoPass = document.querySelector(".pass-input");
const campovalidar = document.querySelector(".boton-input");
const imagen_login = document.querySelector(".boxlogin_img img");
imagen_login.src = "img/acceso.png";
const textLogin = document.querySelector(".box__login h2");

function marcos() {
    campovalidar.addEventListener('click', () => {

        const valueUser = campoUser.value;
        const valuePass = campoPass.value;
    
        if((valueUser == user) && (valuePass == pass)){
            textLogin.textContent = "Bienvenido"
            imagen_login.src = "img/comprobado.png";
            location.href = "paginaCurso.html";
            
        }
    
        else {
            textLogin.textContent = "Incorrecto, intente otra vez"
            imagen_login.src = "img/eliminar.png";
            location.href = "#";
            
        }
    })
    
}




