// Interpolacion
// Fechas

let fecha = new Date();

let anio = fecha.getFullYear();
let mes = fecha.getMonth() + 1;
let nuevoMes = mes < 10 ? "0" + mes : mes;
let dia = fecha.getDate();

let hora =
  fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();

let horaFecha = hora + " - " + dia + "/" + nuevoMes + "/" + anio;

console.log(horaFecha);
console.log(`${hora} - ${dia}/${nuevoMes}/${anio}`);
