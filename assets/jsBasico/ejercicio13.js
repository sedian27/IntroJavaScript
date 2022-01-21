// Local Storage
let ejecutar = document.getElementById("btnEjecutar");
let nombreUsuario = document.getElementById("nombreUsuario");
let nombre = localStorage.getItem("nombre");

const asignarNombre = (nombre) => {
  nombreUsuario.innerHTML = "Bienvenido/a :" + nombre;
};

const cambiarNombre = () => {
  nombre = prompt("Ingresa tu nombre");
  localStorage.setItem("nombre", nombre);
  asignarNombre(nombre);
};

if (nombre) {
  asignarNombre(nombre);
}

// eventos
ejecutar.onclick = () => {
  cambiarNombre();
};
