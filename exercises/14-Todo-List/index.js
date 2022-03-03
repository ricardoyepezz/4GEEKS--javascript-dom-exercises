// Your code here
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

//agrego un event listener al boton
input.addEventListener("keypress", e => {
  //declaro text igual a la entrada del input
  const text = input.value;
  if (text !== "" && e.key === "Enter") {
    // se añade preventDefault para evitar recargo de pag
    e.preventDefault();
    //declaro li para crear elemento
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = text;
    //appendChild de li y ul
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    //coloco input vacio despues de agregar tarea
    input.value = "";
    //al detectar contenido en input desaparece div Empty
    empty.style.display = "none";

  }
});

function addDeleteBtn() {
  //creo boton para eliminar
  const deleteBtn = document.querySelector("li");
  //caracteristicas de boton eliminar (Contenido y estilo)
  
  deleteBtn.addEventListener("click", e => {
    //constante para llamar a elemento hijo (item)
    console.log("hola");
    const item = e.target.parentElement;
    //elimino elemento (item)
    ul.removeChild(item);
  });
  return deleteBtn;
}
