const input = document.getElementById("input");
const boton = document.getElementById("boton");
const lista = document.getElementById("lista");

boton.addEventListener("click", () => {
     if (input.value.trim() === "") {
        return;
    }
    
    const tarea = document.createElement("li");
    tarea.textContent = input.value;
    
    tarea.addEventListener("click", () => {
        tarea.classList.toggle("completada");
    });

    lista.appendChild(tarea);
    input.value = "";
});