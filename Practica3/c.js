function simularPeticionAPi() { //Creamos una función que simula una petición a una API
    return new Promise(resolve => {//Retornamos una promesa que resuelva 
        //si los datos se reciben correctamente
        setTimeout(() => {//Se coloca un setTimeout para simular el tiempo de espera
            resolve("Datos recibidos de la API");//Si la promesa se cumple se 
            //resolve con el mensaje de "Datos recibidos de la API"
        },5000);//El tiempo de espera es de 5 segundos
    });
}

async function asyncDatos() {//Creamos una función asíncrona para manejar la promesa
    try {//Usamos un bloque try-catch para manejar errores, en try intentamos resolver y si
        // se logra se ejecuta el código
        const datos = await simularPeticionAPi();
        console.log(datos);
        console.log("Datos Obtendos Correctamente");
    } catch (error) {//Si no se logra, catch captura el error y se ejecuta este bloque
        console.error("Error al obtener los datos:", error);
    }
}

asyncDatos();//mandamos a llamar la funcion asyncrona para que se ejecute