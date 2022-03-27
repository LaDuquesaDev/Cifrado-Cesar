const cipher = {
    encode,
    decode,
};

//Funciones ENCODE (cifrar)
function encode(rango, textOriginal) { //recibe los valores de los input
    let resultado = ""; //Aqui se almacena el cifrado
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //Esta variable almacena el alfabeto con el que vamos a trabajar
    rango = ((rango % 26) + 26) % 26; //El restante del rango en caso de ser negativo

    for (let i = 0; i < textOriginal.length; i++) { //ciclo for | variable para determinar la longitud del texto | operador incremento
        if (letras.indexOf(textOriginal[i]) != -1) { //condicional | indexOf devuelve el valor de la posición de la letra
            let position = (letras.indexOf(textOriginal[i]) + rango) % 26; //Le suma la letra encontrada al rango para luego sumarle el restante
            resultado += letras[position]; //Concatena el resultado (letras + posición)
        } else {
            resultado += textOriginal[i];
        }
    }
    return resultado;
}

//Funciones DECODE (descifrar)
function decode(rango, textOriginal) {
    let resultado = "";
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    rango = ((rango % 26) - 26) % 26;

    for (let i = 0; i < textOriginal.length; i++) {
        if (letras.indexOf(textOriginal[i]) != -1) {
            let position = (letras.indexOf(textOriginal[i]) - rango) % 26;
            resultado += letras[position];
        } else {
            resultado += textOriginal[i];
        }
    }
    return resultado;
}

export default cipher;