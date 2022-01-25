// 6 prompt donde asignemos 6 ciudades
// se va almacenar en un array (lista de 6 ciudades)
// boton - lista en la pagina
// boton cuando le demos click mostrarlas en el html.
let btnAgregar = document.getElementById("btnAgregar");
let btnMostrar = document.getElementById("btnMostrar");
let h3Ciudades = document.getElementById("ciudades");

let ciudades = [];

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
