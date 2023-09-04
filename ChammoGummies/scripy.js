
const menuIcon = document.getElementById('menu-icon');
const menuList = document.getElementById('menu-list');
const containerNavbar = document.querySelector('.container-navbar');

menuIcon.addEventListener('click', () => {
    containerNavbar.classList.toggle('open');
});

document.addEventListener('click', (event) => {
    if (!containerNavbar.contains(event.target)) {
        containerNavbar.classList.remove('open');
    }
});




document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar todos los enlaces con la clase "smooth-scroll"
    const links = document.querySelectorAll(".smooth-scroll");

    // Agregar un evento de clic a cada enlace
    links.forEach(function (link) {
        link.addEventListener("click", function (e) {
            // Prevenir el comportamiento predeterminado del enlace
            e.preventDefault();

            // Obtener el valor del atributo href
            const targetId = link.getAttribute("href").substring(1);

            // Obtener el elemento al que queremos desplazarnos
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Calcular la posición de desplazamiento
                const offset = targetElement.getBoundingClientRect().top;

                // Desplazar suavemente a la posición objetivo
                window.scrollBy({
                    top: offset,
                    left: 0,
                    behavior: "smooth"
                });
            }
        });
    });
});



