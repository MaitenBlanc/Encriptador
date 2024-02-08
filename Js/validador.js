function validarTexto(texto) {
    let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    let mayusculas = /[A-Z]/g;
    let vacio = "";

    if (texto.match(mayusculas) || texto.match(caracteres)) {
        alert("No se permiten caracteres especiales ni mayúsculas");
        return true;
    } else if (texto == vacio) {
        alert("Ingrese un mensaje para encriptar");
        return true;
    } else {
        return false;
    }
}