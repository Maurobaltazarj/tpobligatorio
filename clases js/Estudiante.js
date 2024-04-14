class Estudiante extends Person{
    constructor(nombre,apellido,estadoCivil,curso){
        super(nombre,apellido,estadoCivil)
        this._curso = curso;
    }
    
    get curso(){
        return this._curso;
    }

    set curso(newCurso){
        this._curso = newCurso;
    }

    imprimir(){
        super.imprimir();
        return `Curso:${this._curso}`;
    }

}
const listadoEstudiante= [];
listadoEstudiante.push();