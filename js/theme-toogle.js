const btn = document.getElementById("toggleDark");
const icon = btn.querySelector(".icon");

//CLICK
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    icon.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    icon.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

// CARGA INICIAL
window.addEventListener("load", () => {
  const theme = localStorage.getItem("theme");

  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    icon.textContent = "☀️";
  } else {
    document.body.classList.remove("dark-mode");
    icon.textContent = "🌙";
  }
});