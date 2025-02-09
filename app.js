// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

// Función para agregar un amigo a la variabe listaDeAmigos
function agregarAmigo() {
  let nombreDeAmigo = document.querySelector('input').value.trim(); // value.trim() elimina los espacios en blanco al inicio y al final
  const validarNombre = /^[A-Za-z]+(\s[A-Za-z]+)*$/;
  
  // Validar si el nombre de amigo está vacío o no cumple con la expresión regular
  if (nombreDeAmigo == '' || !validarNombre.test(nombreDeAmigo)) {
    alert('Ingresa un nombre valido');
    return;
  }
  listaDeAmigos.push(nombreDeAmigo);
  console.log(listaDeAmigos);
  
  actualizarLista();
  limpiarInput();
}

// Función para actualizar el elemento HTML con Id "listaAmigos"
function actualizarLista() {
  let listaHtml = document.getElementById('listaAmigos');
  listaHtml.innerHTML = '';

  for (let i = 0; i < listaDeAmigos.length; i++) {
    // Crear un elemento "li" por cada amigo en la lista
    let li = document.createElement('li');
    li.innerHTML = listaDeAmigos[i];
    listaHtml.appendChild(li);
  }
}

// Función para limpiar el elemento HTML "input"
function limpiarInput() {
  document.querySelector('input').value = '';
}

// Función para limpiar la lista de amigos
function limpiarLista() {
  listaDeAmigos = [];
  actualizarLista();
}

// Función para sortear un amigo secreto
function sortearAmigoSecreto() {

  // Validar si la lista de amigos está vacía o tiene menos de dos amigos
  if (listaDeAmigos == [] || listaDeAmigos.length < 2) {
    alert('Debes agregar al menos dos amigos a la lista');
    return;
  }
  // Obtener un número pseudo aleatorio para seleccionar un amigo secreto
    let numeroSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    //console.log(numeroSorteado);
    // De acuerdo al número sorteado, se resta uno para obtener el índice del amigo secreto
    let amigoSorteado = listaDeAmigos[numeroSorteado];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    let li = document.createElement('li');
    li.innerHTML = 'El amigo secreto sorteado es: ' + amigoSorteado;
    resultado.appendChild(li);

    limpiarLista();
}

// Función para asignar texto a un elemento HTML
function asignaTextoElemento(elemento, texto) {
  let elementoHtml = document.querySelector(elemento);
  elementoHtml.innerHTML = texto;  
}

asignaTextoElemento('h1','Amigo Secreto');
asignaTextoElemento('h2', 'Digite el nombre de su amigos');
