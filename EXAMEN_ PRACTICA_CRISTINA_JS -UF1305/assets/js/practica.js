/**
 * Función para iniciar sesión  
 * 
 * Esta funcion debe pedir una clave que debe ser: 
 * Manilva_1, Sabinillas_2, Duquesa_3, Chullera_4, Moscatal_5, Alejandria_6
 * 
 * Si es Correcta debe de ir a admin.html en esta misma pestaña
 * Si no, en el boton VOLVER ATRAS llamaremos a una funcion para volver al index.html
 * 
*/

function login() {
    // Solicitamos contraseñas y guardamos las claves necesarias en el ARRAY
    var contrasena = prompt("Introduce tu contraseña:");
    var claves = ["Manilva_1", "Sabinillas_2", "Duquesa_3", "Chullera_4", "Moscatal_5", "Alejandria_6"];

    // Comparamos si la contraseña esta incluida en el array de claves
    if (claves.includes(contrasena)) {
        //Si es asi, se abrira admint.html en la misma pagina
        window.open("admin.html", "_self");
    } else {
        //Si no es asi, mostrara un mensaje de contraseña incorrecta
        alert("Contraseña incorrecta.");
    }
}

/*
*   Funcion para volver atras
*
*   Esta funcion sirve para cuando se pulse el boton vuelva a la pagina principal
*/

function volverAtras() {
    // Abrimos la pagina index.html, como no se especifica, suponemos que debe de abrirse en la misma pestaña
    window.open("index.html", "_self");
}

/**
 * Función para cargar la fecha
 * 
 * Esta funcion debe cargar la fecha en este formato:
 *  Lunes, 21 de octubre de 2024
 * 
 * Debera mostrarse tanto en el index.html como en admin.html
*/

function cargarFecha() {
    // Inicializamos los valores
    // Debemos hacer uso de la clase Date y sus metodos get, para obtener el dia de la semana, dia, mes y año 
    var fecha = new Date;
    var dia = fecha.getDate();
    var diaSemana = fecha.getDay();
    var mes = fecha.getMonth();
    var anio = fecha.getFullYear();
    var fechaCompleta = "null";

    // Creamos dos Arrays con los nombres del dia de la semana y el mes
    var diaSemanaNombre = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    var mesNombre = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

    // Machacamos tanto el dia de la semana como el mes, con la posicion de este en su Array de su nombre
    diaSemana = diaSemanaNombre[diaSemana];
    mes = mesNombre[mes];

    //Como el mes lo necesitamos en minisculas llamamos a la funcion toLowerCase
    mes = mes.toLowerCase();

    // Componemos la cadena final
    fechaCompleta = diaSemana + ", " + dia + " de " + mes + " " + anio;

    // Lo mostramos en los IDs llamados fechas de index.html y admin.html
    window.document.getElementById("fecha").innerHTML = fechaCompleta;
}

