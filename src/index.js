import cipher from './cipher.js';

//Función que permite al usuario cambiar el texto a mayúsculas
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

console.log(cipher);



/*
<div id="limpiar">
    <button id="reset" class="button">Limpiar</button>
</div>

document.getElementById("reset").addEventListener("click", function() {
    let clean = document.getElementById("text-original, text-result") = "";
    document.querySelector(clean);
});
*/