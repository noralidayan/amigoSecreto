let amigos = [];
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();
    if (nombre === "") { 
        alert("Por favor ingresa un nombre");
    } else {
        amigos.push(nombre); 
         mostrarAmigos();
         limpiarCaja();
    }
}
function reiniciarJuego (){
    amigos = [];
    mostrarAmigos(); 
    document.getElementById("resultado").innerHTML = "";

}
function limpiarCaja (){
    let valorCaja = document.querySelector("#amigo");
    valorCaja.value = '';
}
function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos"); 
    lista.innerHTML = ""; 
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li"); 
        item.textContent = amigos[i]; 
        lista.appendChild(item);
    }
}
function sortearAmigo() {
    if (amigos.length === 0) {
        document.getElementById("resultado").innerHTML = "No hay amigos en la lista";
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        document.getElementById("resultado").innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
    } 
}
