const datosUsuario = () => {
  let nombre = prompt("Ingrese su nombre:");
  let edad = prompt("Ingrese su edad:");
  let direccion = prompt("Ingrese su dirección:");
  let documento = prompt("Ingrese su documento:");
  let telefono = prompt("Ingrese su teléfono:");

  alert(
    "Hola " +
      nombre +
      ", tu edad es " +
      edad +
      ", tu dirección es " +
      direccion +
      ", tu numero telefónico es " +
      telefono +
      " y tu documento es " +
      documento
  );
};
