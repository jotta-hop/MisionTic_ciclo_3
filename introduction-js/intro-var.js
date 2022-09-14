// costante
const n1 = 10;
//let nos permite crear variables se usa mas para variables locales ya que ocupa
//menos espacios de memoria
let n2 = 20;
n2 = 5;
//var permite reacignar los valores de la variable y se usa en un sentido más global
var n3 = 10;

const suma = n1 + n2 + n3;
console.log("Suma = " + suma);

// Arreglos
let array = [10, 20, 30, 40, 50, 60];
//Obtener el tamaño
console.log(array.length);
//recorrer arreglos
for (let i = 0; i < array.length; i++) {
    //console.log("array["+i+"]-> "+array[i])
    console.log(`array[${i}] -> ${array[i]}`)
}

//Objetos
let persona = {
    nombre: "Alejandra",
    apellido: "Hernandez",
    edad: 28,
    celular: "3123456789"
}

console.log(persona)

//Obtener las llaves del objeto
console.log(Object.keys(persona))

//Obtener los valores del objeto
console.log(Object.values(persona))   