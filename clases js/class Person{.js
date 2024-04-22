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
        Apellido:${this._apellido}
        Id:${this._id}
        Estado civil:${this._estadoCivil}`;
    }
}

class Empleado extends Person{
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

    imprimir=()=> `${super.imprimir()}\n Incorporacion:${this._incorporacion}\n
    Despacho:${this._despacho}`;

}

class Estudiante extends Person{

    constructor(nombre,apellido,estadoCivil,curso){
        super(nombre,apellido,estadoCivil)
        this._curso = curso;
        this._listaEstudiante = [];
    }
    
    get curso(){
        return this._curso;
    }

    set curso(newCurso){
        this._curso = newCurso;
    }

    imprimir=()=> `${super.imprimir()}\n Curso:${this._curso}`;

    guardarDato=()=> this._listaEstudiante.push(this);
}

class Profesor extends Empleado{
    constructor(nombre,apellido,estadoCivil,incorporacion,despacho,departamento){
        super(nombre,apellido,estadoCivil,incorporacion,despacho)
        this._departamento = departamento;
        this._listadoProfesor = [];
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(newDepartamento){
        this._departamento = newDepartamento;
    }

    imprimir=()=> `${super.imprimir()} $Departamento:${this._departamento}`;

    guardarDato=()=> this.listadoProfesor.push(this);
}

class Ps extends Empleado{
    constructor(nombre,apellido,estadoCivil,incorporacion,despacho,seccion){
        super(nombre,apellido,estadoCivil,incorporacion,despacho)
        this._seccion = seccion;
        this._listadoPs = [];
        
    }

    get seccion(){
        return this._seccion;
    }

    set seccion(newSeccion){
        this._seccion = newSeccion;
    }



    imprimir=()=>`${super.imprimir()}\n Seccion:${this._seccion}`;

    guardarDato=()=> this.listadoPs.push(this);
}

class CentroEducativo {
    constructor(alta) {
        this._alta = alta;
        this._estudiantes = [];
        this._profesores = [];
        this._personalServicio = [];
    }

    get alta() {
        return this._alta;
    }

    set alta(newAlta) {
        this._alta = newAlta;
    }

    agregarEstudiante(estudiante) {
        this._estudiantes.push(estudiante);
        return `Se agregó al estudiante:\n${estudiante}`;
    }

    agregarProfesor(profesor) {
        this._profesores.push(profesor);
        return `Se agregó al profesor:\n ${profesor}`;
    }

    agregarPersonalServicio(personal) {
        this._personalServicio.push(personal);
        return `Se agregó al personal de servicio:\n ${personal}`;
    }

    darDeBajaEstudiante(id) {
        const estudianteBaja = this._estudiantes.find(estudiante => estudiante.id === id);
        this._estudiantes = this._estudiantes.filter(estudiante => estudiante.id !== id);
        return `Se dio de baja al estudiante:\n ${estudianteBaja}`;
    }

    darDeBajaProfesor(id) {
        const profesorBaja = this._profesores.find(profesor => profesor.id === id);
        this._profesores = this._profesores.filter(profesor => profesor.id !== id);
        return `Se dio de baja al profesor:${profesorBaja}`;
    }

    darDeBajaPersonalServicio(id) {
        const personalBaja = this._personalServicio.find(personal => personal.id === id);
        this._personalServicio = this._personalServicio.filter(personal => personal.id !== id);
        return `Se dio de baja al personal de servicio:${personalBaja}`;
    }
}