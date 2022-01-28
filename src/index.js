import cipher from './cipher.js';

function mayus() {
    document.getElementById("text-original").addEventListener("keyup", function() {
        this.value = this.value.toUpperCase();
    });
}
mayus()

document.getElementById("cifrar").addEventListener("click", function() {
        let texto = document.getElementById("text-original").value;
        let rango = document.getElementById("rango").value;

        document.getElementById("text-result").value = cipher.encode(texto, rango);
    },
    true
);

document.getElementById("descifrar").addEventListener("click", function() {
        let texto = document.getElementById("text-original").value;
        let rango = document.getElementById("rango").value;

        document.getElementById("text-result").value = cipher.decode(texto, rango);
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