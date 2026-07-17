document.addEventListener("DOMContentLoaded", () => {
  // Navbar Scroll Effect
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile Menu Toggle
  const btn = document.getElementById("mobile-menu-btn");
  const nav = document.getElementById("nav-links");
  btn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  // Cerrar menú al hacer click en un link (móvil)
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 1024) {
        nav.classList.remove("active");
      }
    });
  });

  // Scroll Reveal Animation via Intersection Observer
  const revealElements = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // Dejar de observar una vez animado
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  //Navigate
  $(document).ready(function () {

    function cargarPagina(url) {
      $("#content").load(url, function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }

    // Página inicial
    cargarPagina("views/inicio.html");

    // Navbar
    $("#nav-links a").on("click", function (e) {
      e.preventDefault();

      const url = $(this).attr("page");

      if (!url) return;

      cargarPagina(url);
    });
  });
});
