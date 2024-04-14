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
export {Person};