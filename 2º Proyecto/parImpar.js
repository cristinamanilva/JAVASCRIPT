function esPar() {
    var numero, resultado;
    numero = parseInt(prompt("Inserte un numero: "));
    if ( (numero%2) == 0 ) {
        resultado = "El numero: " + numero + " es par";
        window.document.getElementById("par").innerHTML = resultado;
    } else
        resultado = "El numero: " + numero + " es impar";
        window.document.getElementById("par").innerHTML = resultado;

}