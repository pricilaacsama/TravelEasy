const elementos = document.querySelectorAll(".reveal");

function mostrarElementos() {
  const triggerBottom = window.innerHeight * 0.85;

  elementos.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < triggerBottom) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", mostrarElementos);
window.addEventListener("load", mostrarElementos);