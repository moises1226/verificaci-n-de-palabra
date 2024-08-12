"use strict";
const nota1 = 'mucho gusto, este es un texto literario sobre una noche brillanten en las alturas.';
const nota2 = 'mucho gusto, soy un texto de fabulas explendedoras y maravillosas, espero tener un buen comienzo';
function guardarTexto(palabra, nota) {
    let verficacion = nota.includes(palabra);
    if (verficacion === true) {
        return console.log('La palabra ingresada si esta en la nota');
    }
    else {
        return console.log('la palabra ingresada no esta en la nota');
    }
}
