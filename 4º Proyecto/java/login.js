function login() {
    var usuario = prompt("Ingrese su nombre de usuario:");

    switch (usuario) {            
        case "Pedro Sanchez":
            alert("Bienvenido, Pedro Sanchez");
            break;
        case "Santiago Abascal":
            alert("Bienvenido, Santiago Abascal");
            break;
        case "Alberto Nuñez Feijoo":
            alert("Bienvenido, Alberto Nuñez Feijoo");
            break;
        case "Irene Montero":
            alert("Bienvenida, Irene Montero");
            break;
        case "Isabel Díaz Ayuso":
            alert("Bienvenida, Isabel Díaz Ayuso");
            break;
        case "Gabriel Rufián":
            alert("Bienvenido, Gabriel Rufián");
            break;
        default:
            alert("Usuario no reconocido");
            break;
    }
}