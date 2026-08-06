const input = document.getElementById("input");
const boton = document.getElementById("boton");
const lista = document.getElementById("lista");

boton.addEventListener("click", () => {
    const tarea = document.createElement("li");
    tarea.textContent = input.value;
    lista.appendChild(tarea);
    input.value = "";
});