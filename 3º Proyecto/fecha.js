function fecha() {
    const fecha = new Date();
    const dia = fecha.getDate();
    const mes = fecha.getMonth();  
    const anio = String(fecha.getFullYear());
    const fechaFormateada =  dia + '/' + (mes + 1) + '/' + anio;
    document.getElementById("fecha").innerText = "Fecha actual: " + fechaFormateada;

    let diaSemana = fecha.getDay();
    let nombreDiaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"][diaSemana];
    document.getElementById("fecha2").innerText = "Día de la semana: " + nombreDiaSemana;

    let mesNombre = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"][mes];
    window.document.getElementById("fecha3").innerText = "Mes: " + mesNombre;

    let fechaExacta = "Hoy es " + nombreDiaSemana + ", " + dia + " de " + mesNombre + " de " + anio.slice(-2);
    window.document.getElementById("fechaExacta").innerText = fechaExacta;

}