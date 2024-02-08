async function copy() {
    let textoEncriptado = document.querySelector(".textoEncriptado").value;
    let copyBtn = document.querySelector(".copy");

    copyBtn.addEventListener('click', copy);

    try {
        await navigator.clipboard.writeText(textoEncriptado);
        alert("Texto copiado");
    } catch (err) {
        alert("No hay texto disponible para copiar");
    }
}