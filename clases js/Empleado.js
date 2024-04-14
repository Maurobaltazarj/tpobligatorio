import { Person } from "./main";

class Empleado extends Person{
    #incorporacion;
    constructor(nombre,apellido,estadoCivil,incorporacion, despacho){
        super(nombre,apellido,estadoCivil)
        this._incorporacion = incorporacion;
        this._despacho = despacho;
    }

    get incorporacion(){
        return this._incorporacion
    }

    get despacho(){
        return this._despacho;
    }

    set despacho(newDespacho){
        this._despacho = newDespacho;
    }

    imprimir(){
        super.imprimir();
        return`Despacho:${this._despacho}</br>`;
    }

}

export {Empleado};