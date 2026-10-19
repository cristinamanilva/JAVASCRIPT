function verUrl() {
    var url = window.location;
    alert("La URL de esta página es: " + url);
}

function cerrarIndex() {
    (window.opener).close();
}

function abrirHijo() {
    window.open("dos.html");
}

function irConfirmado() {
    if (window.confirm("¿Desea ir a la página del INDEX?")) {
        window.location.href = "index.html";
    }
}