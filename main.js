/* Formulario de contacto: simula el envío (no se conecta a ningún servidor).
   Sirve para mostrar el spinner dentro del botón "Enviar". */
const formulario = document.getElementById("formulario");
const botonEnviar = document.getElementById("btn-enviar");
const estado = document.getElementById("estado");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  if (!formulario.checkValidity()) {
    estado.className = "mt-3 text-danger";
    estado.textContent = "Completa nombre, email y mensaje para enviar.";
    return;
  }

  estado.textContent = "";
  botonEnviar.classList.add("enviando");
  botonEnviar.disabled = true;

  setTimeout(() => {
    botonEnviar.classList.remove("enviando");
    botonEnviar.disabled = false;
    formulario.reset();
    estado.className = "mt-3 fw-semibold";
    estado.textContent = "Mensaje enviado. Es una simulación: no se guardó en ningún servidor.";
  }, 1500);
});

formulario.addEventListener("reset", () => {
  estado.textContent = "";
});

/* ---------- Interactividad extra ---------- */

/* En pantallas táctiles no existe :hover, así que un toque activa el efecto. */
const sinHover = window.matchMedia("(hover: none)").matches;

document.querySelectorAll(".caja").forEach((caja) => {
  caja.addEventListener("click", () => {
    if (sinHover) caja.classList.toggle("activa");
  });
});

const escena = document.querySelector(".escena");
escena.addEventListener("click", () => {
  if (sinHover) escena.classList.toggle("girada");
});
escena.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter" || evento.key === " ") {
    evento.preventDefault();
    escena.classList.toggle("girada");
  }
});

/* Cierra el menú hamburguesa al elegir una opción (móvil). */
document.querySelectorAll("#menu .nav-link").forEach((enlace) => {
  enlace.addEventListener("click", () => {
    const menu = document.getElementById("menu");
    if (menu.classList.contains("show") && window.bootstrap) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});
