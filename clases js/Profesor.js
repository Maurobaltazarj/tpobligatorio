class Profesor extends Empleado{
    constructor(nombre,apellido,estadoCivil,incorporacion,despacho,departamento){
        super(nombre,apellido,estadoCivil,incorporacion,despacho)
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(newDepartamento){
        this._departamento = newDepartamento.trim();
    }

    imprimir(){
        return super.imprimir() + `Departamento:${this._departamento}`;
    }
}

const listadoProfesor = [];
listadoProfesor.push(Person);
