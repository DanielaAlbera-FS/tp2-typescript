import { Persona } from "./clases/persona";
import { Profesor } from "./clases/profesor";
import { Alumno } from "./clases/alumnos";


const persona = new Persona(
    "Matias",
    "Albera",
    new Date("1990-03-19"),
    "35739900",
    false
);
persona.presentarse();

console.log("---");


const profesor = new Profesor(
    "Mariela",
    "Rodriguez",
    new Date("1958-06-10"),
    "15989233",
    true,
    "Historia",
    20,
    "Secundario",
    "Sociales"
);
profesor.presentarse();

console.log("---");


const alumno = new Alumno(
    "Daniela",
    "Albera",
    new Date("1994-05-12"),
    "37946738",
    false,
    "Desarrollo de Software Full Stack",
    2025,
    8.96
);
alumno.presentarse();