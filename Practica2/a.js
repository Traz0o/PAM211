//Se crea el objeto persona
const persona = {
    nombre:"Alan Aguilar",
    edad:37,
    direccion: {
        ciudad:"Qro",
        pais:"México"
    }
};

//Se usa destructuring para extraer las propiedades del objeto persona
const {nombre, edad, direccion : {ciudad, pais}} = persona;

console.log(persona) //Imprime el objeto persona completo

console.log("Me llamo " + nombre + ", " + "tengo " + edad + " años y vivo en "+ ciudad + " en " + pais)
// Imprime las propiedades extraídas del objeto persona