let animales = ["Perro", "Gato", "Serpiente", "Lobo", "Escoripion", "Conejo"];

for (let i = 0; i < animales.length; i++) {
  console.log("for normal:", animales[i]);
}

// Recibe 3 parametros (datoDelArray, indiceDelDatoEnElArray, Array)
animales.forEach((anl) => {
  console.log("for each:", anl);
});
