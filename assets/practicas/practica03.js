/**
 * un HTML vamos a tener los siguientes textos
 * - Nombre:
 * - Edad:
 * - Direccion:
 * - Telefono:
 * - Documento:
 * - boton (ingresar datos)
 * - prompt que nos piden la informacion
 * - localStorage
 */

const boton = document.getElementById("ejecutar");

const h2Nombre = document.getElementById("nombre");
const h2Edad = document.getElementById("edad");
const h2Direccion = document.getElementById("direccion");
const h2Telefono = document.getElementById("telefono");
const h2Documento = document.getElementById("documento");

let nombre = localStorage.getItem("nombre");
let edad = localStorage.getItem("edad");
let direccion = localStorage.getItem("direccion");
let telefono = localStorage.getItem("telefono");
let documento = localStorage.getItem("documento");

const mostrarDatos = () => {
  h2Nombre.innerHTML = "Nombre: " + nombre;
  h2Edad.innerHTML = "Edad: " + edad;
  h2Direccion.innerHTML = "Direccion: " + direccion;
  h2Telefono.innerHTML = "Telefono: " + telefono;
  h2Documento.innerHTML = "Documento: " + documento;
};

const insertarDatos = () => {
  nombre = prompt("Ingrese su nombre");
  edad = prompt("Ingrese su edad");
  direccion = prompt("Ingrese su direccion");
  telefono = prompt("Ingrese su telefono");
  documento = prompt("Ingrese su documento");

  localStorage.setItem("nombre", nombre);
  localStorage.setItem("edad", edad);
  localStorage.setItem("direccion", direccion);
  localStorage.setItem("telefono", telefono);
  localStorage.setItem("documento", documento);

  mostrarDatos();
};

if (nombre || edad || direccion || telefono || documento) {
  mostrarDatos();
}

boton.onclick = () => {
  insertarDatos();
};
