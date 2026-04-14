const form = document.getElementById("formulario");
const loader = document.getElementById("loader");
const modal = document.getElementById("modal");
const cerrar = document.getElementById("cerrarModal");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  if (!form.checkValidity()) return;

  // Mostrar loader centrado
  loader.style.display = "flex";

  // Simular envío
  setTimeout(() => {
    loader.style.display = "none";
    modal.style.display = "flex";
    form.reset();
  }, 2000);
});

// cerrar modal con botón
cerrar.addEventListener("click", () => {
  modal.style.display = "none";
});

//cerrar haciendo click afuera
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});