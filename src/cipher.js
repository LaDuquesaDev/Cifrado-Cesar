const cipher = {
    encode,
    decode,
};

function encode(textOriginal, rango) {
    let resultado = "";
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    rango = ((rango % 26) + 26) % 26;

    if (textOriginal) {
        for (let i = 0; i < textOriginal.length; i++) {
            if (letras.indexOf(textOriginal[i]) != -1) {
                let position = (letras.indexOf(textOriginal[i]) + rango) % 26;
                resultado += letras[position];
            } else {
                resultado += textOriginal[i];
            }
        }
        return resultado;
    }
}

function decode(textOriginal, rango) {
    let resultado = "";
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    rango = ((rango % 26) - 26) % 26;

    if (textOriginal) {
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
}

export default cipher;