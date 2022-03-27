import cipher from './cipher.js';

//Función para cambiar texto a mayúsculas
function mayus() {
    document.getElementById("text-original").addEventListener("keyup", function() {
        this.value = this.value.toUpperCase();
    });
}
mayus()

//Botón cifrar
document.getElementById("cifrar").addEventListener("click", function() {
        let texto = document.getElementById("text-original").value;
        let rango = document.getElementById("rango").value;

        document.getElementById("text-result").value = cipher.encode(rango, texto);
    },
    true
);

//Botón descifrar
document.getElementById("descifrar").addEventListener("click", function() {
        let texto = document.getElementById("text-original").value;
        let rango = document.getElementById("rango").value;

        document.getElementById("text-result").value = cipher.decode(rango, texto);
    },
    true
);

//Botón Limpiar
function clean() {
    document.getElementById("limpiar").addEventListener("click", function() {
        document.getElementById("origin-text").reset();
        document.getElementById("new-text").reset();
    });
}
clean()

//console.log(cipher);