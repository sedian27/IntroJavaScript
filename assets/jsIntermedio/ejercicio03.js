// DOM y For

let ejFor = document.getElementById("btnEjecutar");

let limite = 5;

const emergente = () => {
  for (let i = 0; i < limite; i++) {
    window.open(
      "https://www.trecebits.com/wp-content/uploads/2020/11/Error-404.jpg"
    );
  }
};

// Evento
ejFor.onclick = () => {
  emergente();
};
