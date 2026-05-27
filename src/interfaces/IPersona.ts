/*Interfaz genérica que define la estructura base de cualquier persona
T representa el tipo de fechaNacimiento, se define cuando la clase la implementa(no siempre)*/

export interface IPersona<T> {
    nombre: string;
    apellido: string;
    fechaNacimiento: T;
    dni: string;

    /*activo indica si la persona está habilitada en el sistema
     por ejemplo si un alumno que dejó la carrera o un profesor retirado tendrían activo: false*/

    activo: boolean;

   
    // void es el tipo de retorno, indica que no devuelve nada, solo hace algo (en este caso mostrar un mensaje por consola)
    presentarse(): void;
}