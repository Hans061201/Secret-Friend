let friends = [];
let name = document.getElementById("amigo");
let lista = document.getElementById("listaAmigos");
let result = document.getElementById("resultado");

const agregarAmigo = () => {
  result.innerHTML = "";
  if (isEmpty(name.value)) {
    alert("Por favor, inserte un nombre.");
    return;
  }

  friends.push(name.value);
  mostrarAmigos();
  name.value = "";
}

const isEmpty = (name) => {
  if (name.trim() === "") {
    return true;
  }
  return false;
}

const mostrarAmigos = () => {
  lista.innerHTML = "";
  friends.forEach((amigo) => {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}


const sortearAmigo = () => {
  let index;
  if (friends.length === 0) {
    alert("La lista de amigos esta vacia.")
    return;
  }
  lista.innerHTML = "";
  index = randomName();
  result.textContent = `El amigo sorteado es ${friends[index]}`;
  friends.splice(0, friends.length);
}

const randomName = () => {
  return Math.floor(Math.random() * friends.length);
}
