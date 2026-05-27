/* Una clase en typescript tiene 4 partes: 1)import 2) se declara la clase base con el export y con implemet para relacionar con la inter faz 
3)propiedades se hacen antes del constructir 4) el constructor 5) los metodos*/


import { IPersona } from "../interfaces/IPersona";


export class Persona implements IPersona<Date> {
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;
    dni: string;

    // activo indica si la persona está habilitada en el sistema
    activo: boolean;

    constructor(nombre: string, apellido: string, fechaNacimiento: Date, dni: string, activo: boolean) 
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.dni = dni;
        this.activo = activo;
    }

    
    presentarse(): void {
    console.log(`Nombre: ${this.nombre} ${this.apellido}`);
    console.log(`Fecha de nacimiento: ${this.fechaNacimiento.toLocaleDateString()}`);
    console.log(`DNI: ${this.dni}`);
    console.log(`Activo en el sistema: ${this.activo}`);
    }
}
