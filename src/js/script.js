const input = document.getElementById("input");
const boton = document.getElementById("boton");
const lista = document.getElementById("lista");

const todas = document.getElementById("todas");
const pendientes = document.getElementById("pendientes");
const completadas = document.getElementById("completadas");

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

todas.addEventListener("click", () => {

    document.querySelectorAll("li").forEach((tarea) => {

        tarea.style.display = "block";

    });

});

pendientes.addEventListener("click", () => {

    document.querySelectorAll("li").forEach((tarea) => {

        tarea.style.display = tarea.classList.contains("completada")
            ? "none"
            : "block";

    });

});

completadas.addEventListener("click", () => {

    document.querySelectorAll("li").forEach((tarea) => {

        tarea.style.display = tarea.classList.contains("completada")
            ? "block"
            : "none";

    });

});