
/* --------------------- ENTREGA 4 (cambio de proyecto) --------------------- */

let nombre
let dni
let menu
let saludo
let horarioElegido
let turnos = []



function pedirDatos() {
    nombre = prompt("Ingrese su nombre y apellido: ")
    dni = prompt("Ingrese su DNI: ")

}



const horarios = ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30"]


const miTurno = () => {
    horarioElegido = prompt("Horarios disponibles:\n\n" + "Ingrese el horario que desea reservar:\n" + horarios.join("\n"))


    return horarioElegido

}



do {
    menu = prompt("Bienvenido/a al Centro de Kinesiologia.\n" + "Seleccione:\n 1. Ver horarios disponibles\n 2. Consultar mi turno\n 3. Urgencias\n 4. Cancelar el turno\n 5. Salir")

    switch (menu) {

        case "1":
            horarioElegido = miTurno()
            pedirDatos()
            alert("Su turno fue agendado con éxito! " + "\n" + "Nombre: " + nombre + "\n" + "DNI: " + dni + "\n" + "Hora: " + horarioElegido + "hs")

            turnos.push(horarioElegido)
            console.log(turnos)


            break

        case "2":
            if (horarioElegido) {
                alert("Turno agendado: " + "\n" + "Nombre: " + nombre + "\n" + "DNI: " + dni + "\n" + "Hora: " + horarioElegido + "hs")
            } else {
                alert("No tiene turnos asignados")
            }
            break

        case "3":

            horarioElegido = miTurno()
            pedirDatos()
            alert("Su turno fue agendado con éxito! " + "\n" + "Nombre: " + nombre + "\n" + "DNI: " + dni + "\n" + "Hora: " + horarioElegido + "hs")

            turnos.unshift(horarioElegido)
            console.log(turnos)

            break

        case "4":



            if (turnos.length === 0) {
                alert("No tiene turnos.")
            }

            let cancelarTurno = prompt("Ingrese el turno que desea cancelar:\n\n " + turnos.join("\n"))
            let posicion = turnos.indexOf(cancelarTurno)
            console.log(posicion)
            console.log(turnos)
            if (posicion === -1) {
                alert("El turno ingresado no existe")
            } else {
                turnos.splice(posicion, [])
                alert("Turno cancelado")
            }


            break

        case "5":
            alert("Gracias!")
            break

        default:
            alert("Opción no válida")


    }

} while (menu !== "5")


















// /* --------------------- ENTREGA 3 --------------------- */



// let numeroA
// let numeroB
// let operacion
// let intentos = 0



// // function menu() {
// //     let operacion = prompt("Elija: 1- Sumar. 2- Restar. 3- Multiplicar. 4- Dividir. 5- Salir ")
// //     return operacion
// // }  /*  Se llevó el prompt a do...while ya que es inecesario crear una fn para un prompt */


// function pedirDatos() {

//     numeroA = parseFloat(prompt("Ingrese el primer número"))
//     if (isNaN(numeroA)) {
//         alert("Debe ingresar un número")
//         return false
//     }

//     numeroB = parseFloat(prompt("Ingrese el segundo número"))
//     if (isNaN(numeroB)) {
//         alert("Debe ingresar un número")
//         return false
//     }

//     return true
// }


// const sumar = function (numeroA, numeroB) {
//     return numeroA + numeroB
// }

// const restar = (numeroA, numeroB) => {
//     return numeroA - numeroB
// }

// const multiplicar = (numeroA, numeroB) => {
//     return numeroA * numeroB
// }


// do {
//     let operacion = prompt("Elija: 1- Sumar. 2- Restar. 3- Multiplicar. 4- Dividir. 5- Salir ")

//     switch (operacion) {

//         case "1":
//             if (pedirDatos()) {

//                 let resultado = sumar(numeroA, numeroB)
//                 alert("El resultado de tu suma es: " + resultado)
//                 intentos++
//             }
//             break

//         case "2":

//             if (pedirDatos()) {
//                 let resultado = restar(numeroA, numeroB)
//                 alert(" El resultado de tu resta es:  " + resultado)
//                 intentos++
//             }
//             break

//         case "3":

//             if (pedirDatos()) {
//                 let resultado = multiplicar(numeroA, numeroB)
//                 alert(" El resultado de tu multiplicación es:  " + resultado)
//                 intentos++
//             }
//             break

//         case "4":

//             if (pedirDatos()) {

//                 if (numeroB !== 0) {
//                     let dividir = numeroA / numeroB
//                     alert("El resultado de tu división es:  " + dividir)
//                     intentos++
//                 } else {
//                     alert("No puede realizar la operacion")
//                 }
//             }
//             break

//         case "5":
//             alert("Muchas Gracias!")
//             break
//         default:
//             alert("Opción inválida")

//     }

//     if (operacion === "1" || operacion === "2" || operacion === "3" || operacion === "4") {
//         alert("Llevas realizados " + intentos + " operación/es. ")
//     }
// } while (operacion !== "5" && intentos < 4)

// if (intentos === 4) {
//     alert("Se cumplieron tus 4 intentos")
// }











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
