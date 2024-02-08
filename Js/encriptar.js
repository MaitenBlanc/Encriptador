let buttonEncriptar = document.querySelector(".buttonEncriptar");

buttonEncriptar.addEventListener("click", () => {
    let textoIngresado = document.querySelector(".ingresarTexto").value;

    if (validarTexto(textoIngresado) == false) {
        let encriptado = encriptar(textoIngresado);
        let resultado = document.querySelector(".textoEncriptado");
        resultado.value = encriptado;
    } else {
        textoIngresado = "";
    }
})

const reglas = { "e": "enter", "i": "imes", "a": "ai", "o": "ober", "u": "ufat" };

function encriptar(textoIngresado) {
    let encriptado = "";

    for (const obj in reglas) {
        encriptado = textoIngresado.replaceAll(obj, reglas[obj]);
        textoIngresado = encriptado;
    }
    return encriptado;
}