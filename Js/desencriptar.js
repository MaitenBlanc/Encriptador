let buttonDesencriptar = document.querySelector(".buttonDesencriptar");

buttonDesencriptar.addEventListener("click", () => {
    let textoIngresado = document.querySelector(".ingresarTexto").value;
    let desencriptado = desencriptar(textoIngresado);

    let resultado = document.querySelector(".textoEncriptado");
    resultado.value = desencriptado;
})

function desencriptar(textoIngresado) {
    let encriptado = "";

    for (const obj in reglas) {
        encriptado = textoIngresado.replaceAll(reglas[obj], obj);
        textoIngresado = encriptado;
    }
    return encriptado;
}