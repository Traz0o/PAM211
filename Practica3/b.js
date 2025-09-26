
function verificarUsuario(usuario) {//Se crea la función verificarUsuario que recibe un
//  parámetro usuario
    return new Promise((resolve, reject) => { //Se retorna un objeto Promise 
    //que recibe dos parámetros resolve y reject
        if (usuario === "admin") { //Si el usuario contiene las letras "admin" ingresa
            resolve("Usuario verificado");//se resuelve la promesa con el mensaje
            //  "Usuario verificado"
        } else {
            reject("Usuario no autorizado");//Si la promesa no se cumple se rechaza con el
            //  mensaje "Usuario no autorizado"
        }
    });
}

verificarUsuario("admin")
.then(res => console.log(res))//Si la promesa se cumple se imprime el mensaje en consola
.catch(err => console.log(err));//Si la promesa no se cumple se imprime el mensaje en consola


verificarUsuario("Alan")
.then(res => console.log(res))//Si la promesa se cumple se imprime el mensaje en consola
.catch(err => console.log(err));//Si la promesa no se cumple se imprime el mensaje en consola
