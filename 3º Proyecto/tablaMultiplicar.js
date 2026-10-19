
function tablaMultiplicar() {
    var numero = parseInt(prompt("Introduce un número para calcular su tabla de multiplicar:"));
    var resultado = "";

    for (var i = numero; i <= 10; i++) {
        resultado += "<div class='columna-tabla'>";
        resultado += "<h3> Tabla del " + i + "</h3>";
        for( var j = 1; j<=10; j++){
            resultado += i + " x " + j + " = " + (i * j) + "<br>";
        }        
        resultado += "</div>";
        //resultado += numero + " x " + i + " = " + (numero * i) + "<br>";
    }

    document.getElementById("resultado").innerHTML = resultado;
}