import Clientes from "./Clientes.js"

let cliente = new Clientes("Aldo", "Negri", 31);

console.log(cliente);

cliente.talk()


var nombre = "Aldo"
let apellido = "Negri"

let edad = 31
let altura = 178.00

let persona = {}

//console.log(persona)

//Object.assign(persona,{nombre, apellido, edad, altura})

persona.nombre = nombre;

//cambiarEdad()

/* let cambiarEdad = () => {
    edad = 40
} */

/* function cambiarEdad() {
    edad = 40
} */

//console.log(edad)

let paises = ["Paraguay","Brasil", "Argentina"]

paises.forEach((pais,i,arr) => {
    //paises[i] += " 00"
    //arr[i] += " 01"
})

//console.log(paises)

let numeros = [1,2,3,4,5]

let numerosMod = numeros.map((n)=>n+10)

//console.log(numeros)
//console.log(numerosMod)

