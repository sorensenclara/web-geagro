/* Sitio comercial: cierra el menú móvil al elegir una opción (los enlaces llevan a secciones de la misma página). */
(() => {
  const nav = document.getElementById("menu");
  const toggle = document.querySelector(".nav-toggle");
  if (!nav || !toggle) return;
  nav.addEventListener("click", (e) => {
    if (e.target.closest("a") && nav.classList.contains("open")) toggle.click();
  });
})();
