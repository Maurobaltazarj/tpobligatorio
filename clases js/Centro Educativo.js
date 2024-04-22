import { Estudiante } from "./Estudiante";
import { Profesor } from "./Profesor";
import { Ps } from "./Personal de Servicio";

// class CentroEducativo{
//     constructor(Estudiante,Profesor,Ps,estado){
//         super(Estudiante,Profesor,Ps)
//         this._estado = estado;
//     }
//     get estado(){
//         return this._estado;
//     }

//     set estado(newEstado){
//         this._estado = newEstado;
//     }




// class CentroEducativo {
//     constructor(nombre) {
//         this.nombre = nombre;
//         this.listaEst = [];
//         this.listaProfes = [];
//         this.listaPs = [];
//     }

//     darAltaPersona(persona) {
//         if (persona === Estudiante){
//             persona.push(listadoEstudiante)
//         } else if(persona === Profesor){
//             persona.push(this.listaProfes)
//         } else
//             persona.push(this.listaPs)
//     };

//     darBajaPersona(persona) {
//         this.personas = this.personas.filter(persona => persona.id !== id);
//     }

//     imprimirInfo() {
//         console.log(`Centro Educativo: ${this.nombre}`);
//         console.log("Personas:");
//         this.personas.forEach(persona => {
//             persona.imprimir();
//             console.log("-------------------------");
//         });
//     }
// }

const centroEducativo = new CentroEducativo("bilingue");
const estudiante1 = new Estudiante("Juan", "Pérez", "Soltero", "Matemáticas");
const profesor1 = new Profesor("María", "Gómez", "Casada", "01/01/2022", "Aula 101", "Matemáticas");
const ps1 = new Ps("Pedro", "Martínez", "Soltero", "01/01/2022", "Despacho 1", "Primaria");

centroEducativo.darAltaPersona(estudiante1);
centroEducativo.darAltaPersona(profesor1);
centroEducativo.darAltaPersona(ps1);

centroEducativo.imprimirInfo();


// let ps1 = new Ps ('lucia','gonzalez','soltera','20/10/2015','3','limpieza');
// let profe1 = new Profesor ('leo','dominguez','casado','5/1/2020','5','matematica');
// let est1 = new Estudiante ('leon', 'diaz', 'soltero','3º 1º');
// console.log(ps1);
// console.log(profe1);
// console.log(est1);
