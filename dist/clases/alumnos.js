"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumno = void 0;
const persona_1 = require("./persona");
// Clase Alumno que hereda de Persona y agrega propiedades propias 
class Alumno extends persona_1.Persona {
    constructor(nombre, apellido, fechaNacimiento, dni, activo, carrera, añoIngreso, promedio) {
        // super llama al constructor de Persona para que inicialice sus propiedades
        super(nombre, apellido, fechaNacimiento, dni, activo);
        this.carrera = carrera;
        this.añoIngreso = añoIngreso;
        this.promedio = promedio;
    }
    presentarse() {
        console.log(`Soy el alumno ${this.nombre} ${this.apellido} y estudio la carrera ${this.carrera}`);
    }
}
exports.Alumno = Alumno;
