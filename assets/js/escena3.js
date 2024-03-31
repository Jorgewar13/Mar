window.addEventListener('load', initScene);

let score = 0; // Definimos la puntuación inicial

function initScene() {
    // No necesitamos crear los plásticos dinámicamente si ya están definidos en el HTML
}

// Registramos el componente 'shootable' para hacer que los plásticos sean eliminables
AFRAME.registerComponent('shootable', {
    init: function () {
        // Escuchamos el evento 'click' en los elementos shootable (plásticos)
        this.el.addEventListener('click', () => {
            // Al hacer clic, eliminamos el plástico del padre (el orbit) y aumentamos la puntuación
            this.el.parentNode.removeChild(this.el);
            document.querySelector('[text]').setAttribute('value', `${++score} plastic delete`);
        });
    }
});