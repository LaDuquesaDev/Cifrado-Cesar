const cipher = {
    encode,
    decode,
};

//Función ENCODE (cifrar)
function encode(rango, textOriginal) { //recibe valores de inputs
    let resultado = ""; //Aqui se almacena el cifrado
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //Variable que almacena el alfabeto con el que trabajamos
    rango = ((rango % 26) + 26) % 26; //Fórmula para calcular el rango

    for (let i = 0; i < textOriginal.length; i++) { //Determina la longitud del texto y agrega operador incremento
        if (letras.indexOf(textOriginal[i]) != -1) { //Devuelve el valor de la posición de la letra
            let position = (letras.indexOf(textOriginal[i]) + rango) % 26; //Le suma la letra encontrada al rango para luego tomar el restante
            resultado += letras[position]; //Muestra resultado
        } else {
            resultado += textOriginal[i]; //De lo contrario muestra texto original
        }
    }
    return resultado;
}

//Función DECODE (descifrar)
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