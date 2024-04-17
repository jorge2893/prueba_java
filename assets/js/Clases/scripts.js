import Animal from "./Animal.js";

const audioPlayer = document.getElementById('player');

export class Aguila extends Animal{
    constructor(nombre, rango, img, comentario, sonido, tipo){
        super(nombre, rango, img, comentario, sonido, tipo)
    }
    animalAguila(){
        audioPlayer.src = `/assets/sounds/${this._sonido}`
        audioPlayer.play();
    }
}
export class Leon extends Animal{
    constructor(nombre, rango, img, comentario, sonido, tipo){
        super(nombre, rango, img, comentario, sonido, tipo)
    }
    animalLeon(){
        audioPlayer.src = `/assets/sounds/${this._sonido}`
        audioPlayer.play();
    }
}
export class Lobo extends Animal{
    constructor(nombre, rango, img, comentario, sonido, tipo){
        super(nombre, rango, img, comentario, sonido, tipo)
    }
    animalLobo(){
        audioPlayer.src = `/assets/sounds/${this._sonido}`
        audioPlayer.play();
    }
}
export class Oso extends Animal{
    constructor(nombre, rango, img, comentario, sonido, tipo){
        super(nombre, rango, img, comentario, sonido, tipo)
    }
    animalOso(){
        audioPlayer.src = `/assets/sounds/${this._sonido}`
        audioPlayer.play();
    }
}
export class Serpiente extends Animal{
    constructor(nombre, rango, img, comentario, sonido, tipo){
        super(nombre, rango, img, comentario, sonido, tipo)
    }
    animalSerpiente(){
        audioPlayer.src = `/assets/sounds/${this._sonido}`
        audioPlayer.play();
    }
}