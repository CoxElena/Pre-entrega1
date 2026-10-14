/* --------------------- ENTREGA 5 --------------------- */


let nombre
let dni
let edad
let mail

let menu
let saludo

let horarioElegido
let turnos = []
let pacientes = []



class Persona {
    constructor(nombre, dni, edad, mail, turno) {
        this.nombre = nombre;
        this.dni = dni;
        this.edad = edad;
        this.mail = mail;
        this.turno = turno
    };
}



function pedirDatos() {
    nombre = prompt("Ingrese su nombre y apellido: ")
    dni = prompt("Ingrese el número de DNI: ")
    edad = prompt("Ingrese su edad")
    mail = prompt("Ingrese su mail: ")

    alert("Su turno fue agendado con éxito! " + "\n" + "Nombre: " + nombre + "\n" + "DNI: " + dni + "\n" + "Hora: " + horarioElegido + "hs")

    turnos.push(horarioElegido)
    console.log(turnos)

    console.log("Turno asignado: ", turnos)

    const paciente1 = new Persona(nombre, dni, edad, mail, horarioElegido)

    console.log(paciente1)
    pacientes.push(paciente1)
    console.log("Lista de pacientes: \n", pacientes)
}


function consultarTurno() {
    if (horarioElegido) {
        alert("Turno agendado: " + "\n" + "Nombre: " + nombre + "\n" + "DNI: " + dni + "\n" + "Hora: " + horarioElegido + "hs")
    } else {
        alert("No tiene turnos asignados")
    }
}

function urgencias() {
    horarioElegido = miTurno()
    pedirDatos()
    alert("Su turno fue agendado con éxito! " + "\n" + "Nombre: " + nombre + "\n" + "DNI: " + dni + "\n" + "Hora: " + horarioElegido + "hs")

    turnos.unshift(horarioElegido)
    console.log(turnos)
}

function cancelarTurno() {
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
        turnos.splice(posicion, 1)
        alert("Turno cancelado")
    }
}


const horarios = ["9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "17:00", "17:30"]




const miTurno = () => {
    horarioElegido = prompt("Horarios disponibles:\n\n" + "Ingrese el horario que desea reservar:\n" + horarios.join("\n"))

    return horarioElegido
}


class Turnero {
    validarTurno(horarioElegido) {
        this.valido = false

        if (!horarios.includes(horarioElegido)) {
            alert("El horario ingresasdo no existe")
        } else if (turnos.includes(horarioElegido)) {
            alert("HOrario ocupado")
        } else {
            this.valido = true
        }
    }
}

const turnero = new Turnero()

do {
    menu = prompt("Bienvenido/a al Centro de Kinesiologia.\n" + "Seleccione:\n 1. Agendar turno\n 2. Consultar mi turno\n 3. Urgencias\n 4. Cancelar el turno\n 5. Salir")

    switch (menu) {

        case "1":
            horarioElegido = miTurno()

            turnero.validarTurno(horarioElegido)
            if (turnero.valido) {
                pedirDatos()
            }

            console.log(pacientes)
            break

        case "2":
            consultarTurno()
            break

        case "3":
            urgencias()
            break

        case "4":
            cancelarTurno()
            break

        case "5":
            alert("Gracias!")
            break

        default:
            alert("Opción no válida")


    }

} while (menu !== "5")



















