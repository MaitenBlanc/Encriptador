// import './mostrarEncriptacion';

var imgEncrypt = document.querySelector('.imgEncrypt');
var divEncriptacion = document.querySelector('.divTextoEncriptado');

function ocultar() {
    if (imgEncrypt != null) {
        imgEncrypt.remove();
        divEncriptacion.style.display = 'block';
    }
}