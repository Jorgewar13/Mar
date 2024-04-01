AFRAME.registerComponent('hit-handler', {
  dependencies: ['material'],

  init: function () {
    var color;
    var el = this.el;
    var scene = document.querySelector('a-scene');

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
    });
  }
});

// Escuchar evento 'score' y actualizar la variable scoreText
document.addEventListener('DOMContentLoaded', function () {
  var scoreText = document.getElementById('scoreText');
  var score = 0;

  document.querySelector('a-scene').addEventListener('score', function (event) {
    score += event.detail.points;
    scoreText.setAttribute('value', 'Score: ' + score);
  });
});
