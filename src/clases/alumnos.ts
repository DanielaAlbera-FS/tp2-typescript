import { Persona } from "./persona";

// Clase Alumno que hereda de Persona y agrega propiedades propias 
export class Alumno extends Persona {
    carrera: string;
    añoIngreso: number;
    promedio: number;

    constructor(
        nombre: string,
        apellido: string,
        fechaNacimiento: Date,
        dni: string,
        activo: boolean,
        carrera: string,
        añoIngreso: number,
        promedio: number
    ) {
        // super llama al constructor de Persona para que inicialice sus propiedades
        super(nombre, apellido, fechaNacimiento, dni, activo);
        this.carrera = carrera;
        this.añoIngreso = añoIngreso;
        this.promedio = promedio;
    }

   
    presentarse(): void {
        console.log(`Soy el alumno ${this.nombre} ${this.apellido} y estudio la carrera ${this.carrera}`);
    }
}