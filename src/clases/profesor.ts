import { Persona } from "./persona";

// Clase Profesor que hereda de Persona y agrega propiedades propias del rol docente
export class Profesor extends Persona {
    materia: string;
    antiguedadDocente: number;

    // nivel indica en qué nivel educativo dicta clases
    nivel: string;
    areaConocimiento: string;

    constructor(
        nombre: string,
        apellido: string,
        fechaNacimiento: Date,
        dni: string,
        activo: boolean,
        materia: string,
        antiguedadDocente: number,
        nivel: string,
        areaConocimiento: string
    ) {
        super(nombre, apellido, fechaNacimiento, dni, activo);
        this.materia = materia;
        this.antiguedadDocente = antiguedadDocente;
        this.nivel = nivel;
        this.areaConocimiento = areaConocimiento;
    }

    presentarse(): void {
        console.log(`Soy el profesor y dicto la materia ${this.materia}`);
       
    }
}