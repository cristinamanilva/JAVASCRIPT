function fecha() {
    var dia, mes, anio, diaSemana, fechaCompleta;
    var diaSemana2 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var mes2 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var fecha = new Date();
    dia = fecha.getDate();
    mes = fecha.getMonth();
    anio = fecha.getFullYear();
    diaSemana = fecha.getDay();

    diaSeamana = diaSemana2[diaSemana];
    mes = mes2[mes];
    anio = anio.toString().slice(-2);

    fechaCompleta = diaSemana + "  " + dia + "/" + mes + "/" + anio;
        
    document.getElementsByClassName("logo")[0].innerHTML = "<strong>" + fechaCompleta + "</strong>";

}

function login() {
    var contraseña = ["Sapien", "Lacinia", "Interdum"];
    var inputContraseña = prompt("Ingrese la contraseña:");

    if (contraseña.includes(inputContraseña)) {
        window.open("../../elements.html", "_blank");
    } else {
        alert("Contraseña incorrecta. Acceso denegado.");
    }
}
