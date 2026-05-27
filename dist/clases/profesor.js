"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profesor = void 0;
const persona_1 = require("./persona");
// Clase Profesor que hereda de Persona y agrega propiedades propias del rol docente
class Profesor extends persona_1.Persona {
    constructor(nombre, apellido, fechaNacimiento, dni, activo, materia, antiguedadDocente, nivel, areaConocimiento) {
        super(nombre, apellido, fechaNacimiento, dni, activo);
        this.materia = materia;
        this.antiguedadDocente = antiguedadDocente;
        this.nivel = nivel;
        this.areaConocimiento = areaConocimiento;
    }
    presentarse() {
        console.log(`Soy el profesor y dicto la materia ${this.materia}`);
    }
}
exports.Profesor = Profesor;
