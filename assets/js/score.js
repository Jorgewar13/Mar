document.addEventListener('DOMContentLoaded', function () {
    var scoreText = document.getElementById('scoreText');
    var score = 0;
  
    document.querySelector('a-scene').addEventListener('score', function (event) {
      score += event.detail.points;
      scoreText.setAttribute('value', 'Score: ' + score);
    });
  });