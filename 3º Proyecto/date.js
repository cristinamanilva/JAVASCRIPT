function date() {
    const fecha = new Date();
    dia = fecha.getDate();
    const mes = fecha.getMonth();  
    const anio = String(fecha.getFullYear());

    if (dia < 10) {
        dia = "0" + dia;
    }

    const fechaFormateada =  dia + '/' + (mes + 1) + '/' + anio;
    document.getElementById("date").innerText = "Date: " + fechaFormateada;

    switch (dia) {
        case 1: dia = dia + "st"; break;
        case 2: dia = dia + "nd"; break;
        case 3: dia = dia + "rd"; break;
        default: dia = dia + "th"; break;
    }

    let diaSemana = fecha.getDay();
    let nombreDiaSemana = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][diaSemana];
    document.getElementById("date2").innerText = "Day of the week: " + nombreDiaSemana;

    let mesNombre = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][mes];
    window.document.getElementById("date3").innerText = "Month: " + mesNombre;

    let fechaExacta = "Today is " + nombreDiaSemana + ", " + dia + " of " + mesNombre + " " + anio;
    window.document.getElementById("dateExacta").innerText = fechaExacta;

}