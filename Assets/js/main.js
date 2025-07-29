// Cierra el menú de navegación en móvil después de hacer clic en un enlace
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los enlaces dentro del menú desplegable
    const navLinks = document.querySelectorAll('#navbarNav .nav-link');
    const menuToggle = document.getElementById('navbarNav');
    const bsCollapse = new bootstrap.Collapse(menuToggle, {
        toggle: false
    });

    // Añade un evento de clic a cada enlace
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            // Si el menú está desplegado (visible), lo oculta
            if (menuToggle.classList.contains('show')) {
                bsCollapse.hide();
            }
        });
    });
});