let valorTicket = 200;
let option;
let total;

const categoria = document.querySelector("#categoria");
const cantidad = document.getElementById("cantidad");
const btnresumen = document.getElementById("btnresumen");
const totaltext = document.getElementById("total");
// evento change para cuando se elija una opcion de las categorias
categoria.addEventListener("change", () => {
  //  asignamos el nombre de la categoria elegida a la variable option
  option = categoria.options[categoria.selectedIndex].text;
  console.log(option);
});


btnresumen .addEventListener("click", () => {
  total=0;
  switch (option) {
    case "Estudiante":
      total = cantidad.value * valorTicket * 0.2;
      break;
    case "Trainee":
      total = cantidad.value * valorTicket * 0.5;
      break;
    case "Junior":
      total = cantidad.value * valorTicket * 0.85;
      break;
    default:
      total = cantidad.value * valorTicket;
  }
  totaltext.innerHTML = total;
});

function redirect() {
  location.href = "tickets.html";
}
