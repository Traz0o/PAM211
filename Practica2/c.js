//Se crea el arreglo de objetos personas
const personas = [
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "María", edad: 28}
// Encontrar persona por nombre
]

//Se usa la función find para encontrar la persona con nombre "Luis"
const encontrar = personas.find(per => per.nombre === "Luis")//Se coloca el punto
//para acceder a la propiedad nombre del objeto persona

//Imprimimos el resultado encontrado dentro del objeto
console.log(encontrar)

//Usar forEach para imprimir los nombres y edades de todas las personas
personas.forEach(per => {console.log("Nombre: " + per.nombre + ", Edad: " + per.edad)})

//Se utiliza reduce para calcular la edad total de todas las personas
const sumaedad = personas.reduce((edades,per) => edades + per.edad, 0);

//Imprimimos la constante sumaedad que contiene la suma de las edades mas un mensaje
console.log("La suma de las edades es: " + sumaedad);