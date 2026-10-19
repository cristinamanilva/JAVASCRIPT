function pideUsuario() {
    let maxUsuario, maxDni, contrasena;
    let usuario = prompt("Dime tu nombre de usuario");
    //maxUsuario = usuario.length;
    let dni = prompt("Dime tu DNI");
    //maxDni = dni.length;
    document.getElementById("usuario").innerText = "Hola, " + usuario + "! Su DNI es: " + dni;
    
    contrasena = (usuario.slice(0, 1)).toUpperCase() + usuario.slice(1, 3) + dni.slice(-5, -1);
    document.getElementById("contrasena").innerText = "Tu contraseña es: " + contrasena;
    
    contrasena = (usuario.slice(0, 1)).toUpperCase() + usuario.slice(1, 3) + "-" + dni.slice(-1) + "-" + dni.slice(-5, -1);
    document.getElementById("contrasena2").innerText = "Tu contraseña es: " + contrasena;

}
 