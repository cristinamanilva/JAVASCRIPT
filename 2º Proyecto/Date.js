function calcularFechaActual() {
  var fecha, dia, mes, anio, hora, minuto, completa;
  fecha = new Date();

  dia = fecha.getDate();
  mes = fecha.getMonth();
  anio = fecha.getFullYear();
  hora = fecha.getHours();
  minuto = fecha.getMinutes();

  switch (mes) {
    case 0:
      mes = "Enero";
      break;
    case 1:
      mes = "Febrero";
      break;
    case 2:
      mes = "Marzo";
      break;
    case 3:
      mes = "Abril";
      break;
    case 4:
      mes = "Mayo";
      break;
    case 5:
      mes = "Junio";
      break;
    case 6:
      mes = "Julio";
      break;
    case 7:
      mes = "Agosto";
      break;
    case 8:
      mes = "Septiembre";
      break;
    case 9:
      mes = "Octubre";
      break;
    case 10:
      mes = "Noviembre";
      break;
    case 11:
      mes = "Diciembre";
      break;
  }

  if (dia <= 9 && dia >= 0) {
    dia = "0" + dia;
  }

  if (hora <= 9 && hora >= 0) {
    hora = "0" + hora;
  }

  if (minuto <= 9 && minuto >= 0) {
    minuto = "0" + minuto;
  }

  completa =
    "Fecha Larga: " +
    dia +
    " de " +
    mes +
    " del " +
    anio +
    ". Son las " +
    hora +
    ":" +
    minuto;

  window.document.getElementById("fecha").innerHTML = completa;
}

function saludo() {
  window.document.getElementById("saluda").innerHTML = "HOLA MUNDO";
}

function calcularFecha() {
  var fecha, diaSemana,dia, mes, anio, hora, minuto, completa;
  fecha = new Date();

  diaSemana = fecha.getDay();
  dia = fecha.getDate();
  mes = fecha.getMonth();
  anio = fecha.getFullYear();

  switch (diaSemana){
    case 0:
      diaSemana = "Domingo";
      break;
    case 1:
      diaSemana = "Lunes";
      break;
    case 2:
      diaSemana = "Martes";
      break;
    case 3:
      diaSemana = "Miercoles";
      break;
    case 4:
      diaSemana = "Jueves";
      break;
    case 5:
      diaSemana = "Viernes";
      break;
    case 6:
      diaSemana = "Sabado";
      break;
  }

  switch (mes) {
    case 0:
      mes = "Enero";
      break;
    case 1:
      mes = "Febrero";
      break;
    case 2:
      mes = "Marzo";
      break;
    case 3:
      mes = "Abril";
      break;
    case 4:
      mes = "Mayo";
      break;
    case 5:
      mes = "Junio";
      break;
    case 6:
      mes = "Julio";
      break;
    case 7:
      mes = "Agosto";
      break;
    case 8:
      mes = "Septiembre";
      break;
    case 9:
      mes = "Octubre";
      break;
    case 10:
      mes = "Noviembre";
      break;
    case 11:
      mes = "Diciembre";
      break;
  }

  if (dia <= 9 && dia >= 0) {
    dia = "0" + dia;
  }

  completa = "Fecha Corta: " + diaSemana + ", "  + dia + " de " + mes + " del " + anio;

  window.document.getElementById("fechaCorta").innerHTML = completa;
}

function calcularHora() {
  var fecha, hora, minuto, completa;
  fecha = new Date();

  hora = fecha.getHours();
  minuto = fecha.getMinutes();

  if (hora <= 9 && hora >= 0) {
    hora = "0" + hora;
  }

  if (minuto <= 9 && minuto >= 0) {
    minuto = "0" + minuto;
  }

  completa = "Hora: " + hora + ":" + minuto;

  window.document.getElementById("hora").innerHTML = completa;
}
