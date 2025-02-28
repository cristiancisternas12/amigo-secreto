// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
var amigos = [];
var ganador = document.getElementById('resultado');
var ul = document.getElementById("listaAmigos");

function agregarAmigo() {
    if (document.getElementById('amigo').value == "") {
        alert("Por Favor Ingrese un Nombre");
    } else {
        amigos.push(document.getElementById('amigo').value);
        var ultimoElemento = amigos[amigos.length - 1];
        var li = document.createElement("li"); //crea los elementos de la lista
        li.textContent = ultimoElemento;
        ul.appendChild(li);// agrega los elementos a la lista
        limpiar(); // limpa el imput y autofoco
    }//---FIN IF-----
}//-------FIN FUNCION-------------

function limpiar() {
    document.getElementById('amigo').value = "";
    document.getElementById('amigo').focus(); //FOCO EN INPUT
}

function sortearAmigo() {
    borrarLista();
    var num = Math.floor(Math.random() * amigos.length);
    ganador.innerHTML = "El Ganador del sorteo es: " + amigos[num];
}

function borrarLista() {
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
}