//Se crea un arreglo de objetos
const productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 250 },
    { nombre: "Teclado", precio: 750 },
    { nombre: "Monitor", precio: 3000 }
]

//Filtramos los datos del objeto en base al precio con la condicion mayor a 1000 usando la funcion filter
const precios = productos.filter(pre => pre.precio > 1000)

//Imprimimos la lista de productos que cumplen con la condicion
console.log(precios)

//Usamos map para crear un nuevo arreglo con solo los nombres de los productos
const nombres = productos.map(nom => nom.nombre)

//Imprimimos el nuevo arreglo con los nombres de los productos
console.log(nombres)