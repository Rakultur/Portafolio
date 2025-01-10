// Propuesta JavaScrip

// Burger
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
  body.classList.add("scroll");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
  body.classList.remove("scroll");
});
