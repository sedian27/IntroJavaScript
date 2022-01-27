let msjCiudad = "¡Ciudad ingresada no valida!\n";

let departamento = prompt(
  "Escriba alguno de los siguientes departamentos: bogota, antioquia, atlantico, sucre o amazonas"
);

while (
  departamento != "bogota" &&
  departamento != "antioquia" &&
  departamento != "atlantico" &&
  departamento != "sucre" &&
  departamento != "amazonas"
) {
  departamento = prompt(
    "¡Departamento ingresado no valido!\n Escriba alguno de los siguientes departamentos: bogota, antioquia, atlantico, sucre o amazonas"
  );
}

if (departamento === "bogota") {
  ciudad = prompt(
    "Ingrese una de las siguientes ciudades: usaquen, chapinero, santa fe, san cristobal o usme"
  );

  while (
    ciudad != "usaquen" &&
    ciudad != "chapinero" &&
    ciudad != "santa fe" &&
    ciudad != "san cristobal" &&
    ciudad != "usme "
  ) {
    ciudad = prompt(
      msjCiudad +
        "Ingrese una de las siguientes ciudades: usaquen, chapinero, santa fe, san cristobal o usme"
    );
  }

  if (ciudad === "usaquen") {
    alert("Alcalde: Jaime Vargas Vives");
  } else if (ciudad === "chapinero") {
    alert("Alcalde: Oscar Yesid Ramos Calderón");
  } else if (ciudad === "santa fe") {
    alert("Alcalde: Dairo Giraldo");
  } else if (ciudad === "san cristobal") {
    alert("Alcalde: Juan Carlos Triana Rubiano");
  } else if (ciudad === "usme") {
    alert("Alcalde: Mabel Andrea Sua Toledo");
  }
} else if (departamento === "antioquia") {
  ciudad = prompt(
    "Ingrese una de las siguientes ciudades: medellin, bello, envigado, apartado o caucasia"
  );

  while (
    ciudad != "medellin" &&
    ciudad != "bello" &&
    ciudad != " envigado" &&
    ciudad != "apartado" &&
    ciudad != "caucasia"
  ) {
    ciudad = prompt(
      msjCiudad +
        "Ingrese una de las siguientes ciudades: medellin, bello, envigado, apartado o caucasia"
    );
  }

  if (ciudad === "medellin") {
    alert("Alcalde: Daniel Quintero Calle");
  } else if (ciudad === "bello") {
    alert("Alcalde: Oscar Andrés Pérez Muñoz");
  } else if (ciudad === "envigado") {
    alert("Alcalde: Braulio Alonso Espinosa Márquez ");
  } else if (ciudad === "apartado") {
    alert("Alcalde: Felipe Benicio Cañizalez Palacios");
  } else if (ciudad === "caucasia") {
    alert("Alcalde: Jefferson Sarmiento Ortiz");
  }
} else if (departamento === "atlantico") {
  let ciudad = prompt(
    "Ingrese una de las siguientes ciudades: barranquilla, soledad, malambo, sabanalarga o baranoa"
  );

  while (
    ciudad != "barranquilla" &&
    ciudad != "soledad" &&
    ciudad != "malambo" &&
    ciudad != "sabanalarga" &&
    ciudad != "baranoa"
  ) {
    ciudad = prompt(
      msjCiudad +
        "Ingrese una de las siguientes ciudades: barranquilla, soledad, malambo, sabanalarga o baranoa"
    );
  }

  if (ciudad === "barranquilla") {
    alert("Alcalde: Jaime Pumarejo Heins");
  } else if (ciudad === "soledad") {
    alert("Alcalde: Rodolfo Ucros Rosales");
  } else if (ciudad === "malambo") {
    alert("Alcalde: Rummenige Monsalve Alvarez");
  } else if (ciudad === "sabanalarga") {
    alert("Alcalde: Jorge Luis Manotas Manotas");
  } else if (ciudad === "baranoa") {
    alert("Alcalde: Roberto Celedón Venegas");
  } else {
    alert("ciudad no valida!");
  }
} else if (departamento === "sucre") {
  let ciudad = prompt(
    "Ingrese una de las siguientes ciudades: sincelejo, guaranda, majagual, sucre o chalan"
  );

  while (
    ciudad != "sincelejo" &&
    ciudad != "guaranda" &&
    ciudad != "majagual" &&
    ciudad != "sucre" &&
    ciudad != "chalan"
  ) {
    ciudad = prompt(
      msjCiudad +
        "Ingrese una de las siguientes ciudades: sincelejo, guaranda, majagual, sucre o chalan"
    );
  }

  if (ciudad === "sincelejo") {
    alert("Alcalde: Andrés Gómez Martínez");
  } else if (ciudad === "guaranda") {
    alert("Alcalde: Nolberto Beltrán Bueno");
  } else if (ciudad === "majagual") {
    alert("Alcalde: Ramiro Rada");
  } else if (ciudad === "sucre") {
    alert("Alcalde: Elvira Julia Mercado");
  } else if (ciudad === "chalan") {
    alert("Alcalde: Ivone Fernández Gutierrez");
  }
  // else {
  //   alert("ciudad no valida!");
  // }
} else if (departamento === "amazonas") {
  let ciudad = prompt(
    "Ingrese una de las siguientes ciudades: el encanto, puerto nariño, la pedrera, la victoria o leticia"
  );

  while (
    ciudad != "el canto" &&
    ciudad != "puerto nariño" &&
    ciudad != "la pedrera" &&
    ciudad != "la victoria" &&
    ciudad != "leticia"
  ) {
    ciudad = prompt(
      msjCiudad +
        "Ingrese una de las siguientes ciudades: el encanto, puerto nariño, la pedrera, la victoria o leticia"
    );
  }
  if (ciudad === "el encanto") {
    alert("Alcalde: Mary Sofía Muñoz Romero");
  } else if (ciudad === "puerto nariño") {
    alert("Alcalde: Jose Alberto Lozada Pinedo");
  } else if (ciudad === "la pedrera") {
    alert("Corregidor: Martha Cecilia Astudillo");
  } else if (ciudad === "la victoria") {
    alert("Corregidor: Mario Alberto Yucuna");
  } else if (ciudad === "leticia") {
    alert("Alcalde: Jorge Luis Mendoza Muñoz");
  }
  // else {
  //   alert("ciudad no valida!");
  // }
}
// else {
//   alert("No ingreso un departamento valido!");
// }
