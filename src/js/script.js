const input = document.getElementById("input");
const boton = document.getElementById("boton");
const lista = document.getElementById("lista");

boton.addEventListener("click", () => {
     if (input.value.trim() === "") {
        return;
    }
    
    const tarea = document.createElement("li");
    tarea.textContent = input.value;

    const eliminar = document.createElement("button");
    eliminar.textContent = "❌";

    tarea.appendChild(eliminar);
    
    tarea.addEventListener("click", () => {
        tarea.classList.toggle("completada");
    });

    lista.appendChild(tarea);
    input.value = "";
});

eliminar.addEventListener("click", (event) => {
    event.stopPropagation();
    tarea.remove();
});