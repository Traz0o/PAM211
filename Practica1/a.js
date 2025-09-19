let nombre = "Armando"; //Se cambia la variable var por let para seguir buenas prácticas
let edad = 25; //El uso de let nos permite cambiar el valor de la variable si es necesario
// Se cambia el nombre a "Ana Maria" para reflejar el cambio solicitado

nombre = "Ana Maria"; //Se reasigna el valor de la variable nombre

const saludo = "Hola " + nombre + ". Tienes " + edad + " años"; //Se usa const para obtener
//un saludo que no cambiará solo se crea una vez y las que cambian son las varibales nombre y edad

console.log(saludo);// Imprime la constante saludo con el contenido