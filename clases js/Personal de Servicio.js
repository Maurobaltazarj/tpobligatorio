class Ps extends Empleado{
    constructor(nombre,apellido,estadoCivil,incorporacion,despacho,seccion){
        super(nombre,apellido,estadoCivil,incorporacion,despacho)
        this._seccion = seccion;
    }

    get seccion(){
        return this._seccion;
    }

    set seccion(newSeccion){
        this._seccion = newSeccion;
    }

    imprimir(){
        super.imprimir();
        return `Seccion:${this._seccion}</br>`;
    }
}
const listadoPs = [];
listadoPs.push(Person);
