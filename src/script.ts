const nota1:string = 'mucho gusto, este es un texto literario sobre una noche brillanten en las alturas.'

const nota2:string = 'mucho gusto, soy un texto de fabulas explendedoras y maravillosas, espero tener un buen comienzo'


function guardarTexto(palabra : string , nota : string ) {


    let verficacion : boolean = nota.includes(palabra);



    if(verficacion === true ){

        return console.log('La palabra ingresada si esta en la nota');
    
    }else{

       return console.log('la palabra ingresada no esta en la nota');
        

    }


}