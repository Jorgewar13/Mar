AFRAME.registerComponent('hit-handler', {
  dependencies: ['material'],

  init: function () {
    let color;
    let el = this.el;
    let scene = document.querySelector('a-scene');
    let bubbleModel = document.getElementById('bubbleModel');
    let bubbleSound = document.getElementById('bubbleSound');

    color = new THREE.Color();
    color.set('#666');
    el.components.material.material.color.copy(color);

    el.addEventListener('hit', () => {
      color.addScalar(0.05);
      el.components.material.material.color.copy(color);
    });

    el.addEventListener('die', () => {
      color.setRGB(1, 0, 0);
      el.components.material.material.color.copy(color);
      el.parentElement.removeChild(el); // Eliminar el objeto cuando muere
      scene.emit('score', {points: 1}); // Emitir evento 'score' al destruir el objeto
      bubbleModel.setAttribute('visible', true); // Mostrar el modelado de burbujas
      bubbleSound.components.sound.playSound(); // Reproducir sonido de burbujas

      // Ocultar la burbuja y detener el sonido después de 2 segundos (ajusta el tiempo según tus necesidades)
      setTimeout(() => {
        bubbleModel.setAttribute('visible', false);
        bubbleSound.components.sound.stopSound();
      }, 500);
    });
  }
});
