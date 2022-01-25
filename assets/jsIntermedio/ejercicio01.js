// Fechas

let fecha = new Date();

let anio = fecha.getFullYear();
let mes = fecha.getMonth() + 1;
let nuevoMes = mes < 10 ? "0" + mes : mes;
let dia = fecha.getDate();

let hora =
  fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds();

let horaFecha = hora + " - " + dia + "/" + nuevoMes + "/" + anio;
// 11:24:34 - 25/01/2022
console.log(horaFecha);
