import { Estudiante } from "./Estudiante";
import { Profesor } from "./Profesor";
import { Ps } from "./Personal de Servicio";

// class CentroEducativo {
//     constructor(nombre) {
//         this.nombre = nombre;
//         this.personas = [];
//     }

//     darAltaPersona(persona) {
//         this.personas.push(persona);
//     }

//     darBajaPersona(id) {
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

// const centroEducativo = new CentroEducativo("bilingue");
// const estudiante1 = new Estudiante("Juan", "Pérez", "Soltero", "Matemáticas");
// const profesor1 = new Profesor("María", "Gómez", "Casada", "01/01/2022", "Aula 101", "Matemáticas");
// const ps1 = new Ps("Pedro", "Martínez", "Soltero", "01/01/2022", "Despacho 1", "Primaria");

// centroEducativo.darAltaPersona(estudiante1);
// centroEducativo.darAltaPersona(profesor1);
// centroEducativo.darAltaPersona(ps1);

// centroEducativo.imprimirInfo();
class CentroEducativo{ 
    constructor(alta,baja){
        this.alta = alta;
        this.baja = baja;
    }

    get alta(){
        return this._alta;
    }
    get baja(){
        return this._baja;
    }
    set alta(newAlta){
        this._alta = newAlta;
    }
    set baja(newBaja){
        this._baja = newBaja;
    }


}

let ps1 = new Ps ('lucia','gonzalez','soltera','20/10/2015','3','limpieza');
let profe1 = new Profesor ('leo','dominguez','casado','5/1/2020','5','matematica');
let est1 = new Estudiante ('leon', 'diaz', 'soltero',)
console.log(ps1);
console.log(profe1);
