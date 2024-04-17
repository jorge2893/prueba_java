export default class Animal {
    constructor(nombre, rango, img, comentarios, sonido, tipo){
        this._nombre = nombre;
        this._rango= rango;
        this._img = img;
        this._comentarios = comentarios;
        this._sonido = sonido;
        this._tipo = tipo;

    }
    get nombre(){
        return this._nombre;
    }
    get rango(){
        return this._rango
    }
    get img(){
        return this._img
    }
    get comentarios(){
        return this._comentarios;
    }
    get sonido(){
        return this._sonido;
    }
    get tipo(){
        return this._tipo;
    }

}