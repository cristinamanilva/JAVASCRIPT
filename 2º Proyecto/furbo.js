function divisionEstas() {
    var numero, resultado;
    numero = parseInt(prompt("Inserte su edad: "));

    switch (true) {
        case (numero <= 5):
            resultado = "Con " +numero+ " estas en bebé"
            window.document.getElementById("division").innerHTML = resultado;
            break;
        case (numero >= 6 && numero <= 7):
            resultado = "Con " +numero+ " estas en prebenjamin"
            window.document.getElementById("division").innerHTML = resultado;
            break;
        case (numero >= 8 && numero <= 9):
            resultado = "Con " +numero+ " estas en benjamin"
            window.document.getElementById("division").innerHTML = resultado;
            break;
        case (numero >= 10 && numero <= 11):
            resultado = "Con " +numero+ " estas en alevín"
            window.document.getElementById("division").innerHTML = resultado;
            break;
        case (numero >= 12 && numero <= 13):
            resultado = "Con " +numero+ " estas en infantil"
            window.document.getElementById("division").innerHTML = resultado;
            break; 
        case (numero >= 14 && numero <= 15):
            resultado = "Con " +numero+ " estas en cadete"
            window.document.getElementById("division").innerHTML = resultado;
            break;
        case (numero >= 16 && numero <= 18):
            resultado = "Con " +numero+ " estas en juvenil"
            window.document.getElementById("division").innerHTML = resultado;
            break;
        case (numero >= 19):
            resultado = "Con " +numero+ " estas en senior"
            window.document.getElementById("division").innerHTML = resultado;
            break;          
    }


}
