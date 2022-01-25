// 6 prompt donde asignemos 6 ciudades
// se va almacenar en un array (lista de 6 ciudades)
// boton - lista en la pagina
// boton cuando le demos click mostrarlas en el html.
let btnAgregar = document.getElementById("btnAgregar");
let btnMostrar = document.getElementById("btnMostrar");
let h3Ciudades = document.getElementById("ciudades");

let ciudades = [];

// Ingresar 6 ciudades sin tanta validacion
const agregarCiudades = () => {
  if (ciudades.length < 6) {
    for (let i = 0; i < 6; i++) {
      let ciudad = prompt(`Ingrese la ciudad nro ${i + 1}`);
      ciudades.push(ciudad);
    }
  } else {
    alert("Las 6 ciudades ya fueron ingresadas!");
  }
};

// Agregar la cantidad de ciudades que se quieran sin que se repitan y no dejando que se ingresen campos vacios o nulos
const agregarCiudadesValidadas = () => {
  let ciudad = prompt("Ingrese nombre de la ciudad:");
  if (ciudad == "" || ciudad == null) {
    alert("Error al ingresar la ciudad");
  } else if (ciudades.indexOf(ciudad) > -1) {
    alert("La ciudad ya fue ingresada!");
  } else {
    ciudades.push(ciudad);
  }
};

const mostrarCiudades = () => {
  h3Ciudades.innerHTML = "";
  for (let i = 0; i < ciudades.length; i++) {
    h3Ciudades.innerHTML = h3Ciudades.innerHTML + ciudades[i] + "<br>";
  }
};

btnAgregar.onclick = () => {
  agregarCiudades();
};

btnMostrar.onclick = () => {
  mostrarCiudades();
};
