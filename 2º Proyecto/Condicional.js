
function ifRuleta() {
    var numero, resultado;
    numero = parseInt(prompt("Inserte un numero (menor que 15)"));
    if (numero <= 15 && numero > 0) {
        resultado = getRandomInt(numero);
        resultado++;
        window.document.getElementById("ruleta").innerHTML = resultado;
    } else
        window.document.getElementById("ruleta").innerHTML = "No esta en el rango esperado";


}


function getRandomInt(max){
    return Math.floor(Math.random() * max);
}