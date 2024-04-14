class Person{
    static id =  0;

    constructor(nombre,apellido,estadoCivil){
        this._nombre = nombre;
        this._apellido = apellido;
        this._id = ++Person.id;
        this._estadoCivil = estadoCivil;
    }

    get nombre(){
        return this._nombre;
    }
    get apellido(){
        return this._apellido;
    }
    get id(){
        return this._id;
    }
    get estadoCivil(){
        return this._estadoCivil;
    }
    set estadoCivil(cambioEc){
        this._estadoCivil = cambioEc;
    }

    imprimir(){
        return `Nombre:${this._nombre}
        Apellido:${this._apellidopellido}
        Id:${this._id}
        Estado civil:${this._estadoCivil}`;
    }
}




class Empleado extends Person{
    #incorporacion;
    constructor(nombre,apellido,estadoCivil,incorporacion, despacho){
        super(nombre,apellido,estadoCivil)
        this.#incorporacion = incorporacion;
        this.despacho = despacho;
    }

    get incorporacion(){
        return this.#incorporacion
    }

    get despacho(){
        return this._despacho;
    }

    set despacho(newDespacho){
        this._despacho = newDespacho.trim();
    }

    imprimir(){
        super.imprimir();
        return`Despacho:${this.despacho}</br>`;
    }

}



class Profesor extends Empleado{
    constructor(nombre,apellido,estadoCivil,incorporacion,despacho,departamento){
        super(nombre,apellido,estadoCivil,incorporacion,despacho)
        this.departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(newDepartamento){
        this._departamento = newDepartamento.trim();
    }

    imprimir(){
        super.imprimir();
        return`Departamento:${this.departamento}</br>`;
    }
}

const listadoProfesor = [];
listadoPersona.push(Person);


class Ps extends Empleado{
    constructor(nombre,apellido,estadoCivil,incorporacion,despacho,seccion){
        super(nombre,apellido,estadoCivil,incorporacion,despacho)
        this.seccion = seccion;
    }

    get seccion(){
        return this._seccion;
    }

    set seccion(newSeccion){
        this._seccion = newSeccion.trim();
    }

    imprimir(){
        super.imprimir();
        return `Seccion:${this.seccion}</br>`;
    }
}
const listadoPs = [];
listadoPersona.push(Person);


class CentroEducativo{
    constructor(nombre,apellido,id,estadoCivil,alta,baja){
        super(nombre,apellido,id,estadoCivil)
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

let profe1 = new Profesor('mauro', 'jara','soltero', 20/2/2020, 'sala 1', 'Matematica');
console.log(profe1.imprimir());