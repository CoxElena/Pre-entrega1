/* --------------------- ENTREGA 3 --------------------- */



let numeroA
let numeroB
let operacion
let intentos = 0



function menu() {
    let operacion = prompt("Elija: 1- Sumar. 2- Restar. 3- Multiplicar. 4- Dividir. 5- Salir ")
    return operacion
}


function pedirDatos() {

    numeroA = parseFloat(prompt("Ingrese el primer número"))
    if (isNaN(numeroA)) {
        alert("Debe ingresar un número")
        return false
    }

    numeroB = parseFloat(prompt("Ingrese el segundo número"))
    if (isNaN(numeroB)) {
        alert("Debe ingresar un número")
        return false
    }

    return true
}


const sumar = function (numeroA, numeroB) {
    return numeroA + numeroB
}

const restar = (numeroA, numeroB) => {
    return numeroA - numeroB
}

const multiplicar = (numeroA, numeroB) => {
    return numeroA * numeroB
}


do {
    operacion = menu()

    switch (operacion) {

        case "1":
            if (pedirDatos()) {

                let resultado = sumar(numeroA, numeroB)
                alert("El resultado de tu suma es: " + resultado)
                intentos++
            }
            break

        case "2":

            if (pedirDatos()) {
                let resultado = restar(numeroA, numeroB)
                alert(" El resultado de tu resta es:  " + resultado)
                intentos++
            }
            break

        case "3":

            if (pedirDatos()) {
                let resultado = multiplicar(numeroA, numeroB)
                alert(" El resultado de tu multiplicación es:  " + resultado)
                intentos++
            }
            break

        case "4":

            if (pedirDatos()) {

                if (numeroB !== 0) {
                    let dividir = numeroA / numeroB
                    alert("El resultado de tu división es:  " + dividir)
                    intentos++
                } else {
                    alert("No puede realizar la operacion")
                }
            }
            break

        case "5":
            alert("Muchas Gracias!")
            break
        default:
            alert("Opción inválida")

    }

    if (operacion === "1" || operacion === "2" || operacion === "3" || operacion === "4") {
        alert("Llevas realizados " + intentos + " operación/es. ")
    }
} while (operacion !== "5" && intentos < 4)

if (intentos === 4) {
    alert("Se cumplieron tus 4 intentos")
}











/* Pre-Entrega 2 */

// Menu de operaciones matemáticas

// let numeroA
// let numeroB
// let operacion
// let intentos = 0

// do {

//     operacion = prompt("Elija: 1- Sumar. 2- Restar. 3- Multiplicar. 4- Dividir. 5- Salir ")

//     switch (operacion) {

//         case "1":
//             numeroA = Number(prompt("Ingrese el primer numero"))
//             numeroB = Number(prompt("Ingrese el segundo numero"))
//             let sumar = (numeroA + numeroB)
//             alert(" El resultado de tu suma es:  " + sumar)
//             intentos++
//             break

//         case "2":
//             numeroA = Number(prompt("Ingrese el primer numero"))
//             numeroB = Number(prompt("Ingrese el segundo numero"))

//             let restar = (numeroA - numeroB)
//             alert(" El resultado de tu resta es:  " + restar)
//             intentos++
//             break

//         case "3":
//             numeroA = Number(prompt("Ingrese el primer numero"))
//             numeroB = Number(prompt("Ingrese el segundo numero"))

//             let multiplicar = (numeroA * numeroB)
//             alert(" El resultado de tu multiplicación es:  " + multiplicar)
//             intentos++
//             break

//         case "4":
//             numeroA = Number(prompt("Ingrese el primer numero"))
//             numeroB = Number(prompt("Ingrese el segundo numero"))


//             if (numeroB !== 0) {
//                 let dividir = (numeroA / numeroB)
//                 alert("El resultado de tu división es:  " + dividir)
//                 intentos++
//             } else {
//                 alert("No puede realizar la operacion")
//             }

//             break

//         case "5":
//             alert("Muchas Gracias!")
//             break
//         default:
//             alert("Opcion inválida")

//     }
// } while (operacion !== "5" && intentos < 4)

// if (intentos === 4) {
//     alert("Se cumplieron tus 4 intentos")
// }







//* Pre-Entrega 1 */
/* let nombre = prompt("Nombre: ")
const nacimiento =  parseInt(prompt("Año de nacimiento: aaaa"))
let edad = 2026 - nacimiento
let materia = prompt("Materia que cursa: ")

 console.log(nombre)
 console.log(nacimiento)
 console.log(edad)
 console.log(materia)

 alert ("Nombre: " + nombre +"\n" + "Año: " + nacimiento +"\n" +"Edad: "+ edad+" años "+ "\n" +"Materia: "+ materia  + "\n" +"Bienvenido/a " + nombre+" !! ☻ ")
 */
