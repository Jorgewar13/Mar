
const shoot = () => {
  const bullet = document.createElement("a-sphere");
  let pos = myCamera.getAttribute("position");
  bullet.setAttribute("position", pos);
  bullet.setAttribute("velocity", getDirection(myCamera, 30));
  bullet.setAttribute("dynamic-body", true);
  bullet.setAttribute("radius", 0.5);
  bullet.setAttribute("src", "https://i.imgur.com/H8e3Vnu.png ");
  myScene.appendChild(bullet);
  bullet.addEventListener('collide', shootCollided); // cuando hay una collide(evento) choque entre objetos se activa la funcion shootCollided(manejador de ebventos)
};

const shootCollided = event => {
  if (event.detail.body.id === 'floor') {
    console.log('hit the floor');
    event.detail.el.removeEventListener('collide', shootCollided);
    myScene.removeChild(event.detail.target.el);
  } else if (event.detail.body.el.className === 'target') {
    console.log('hit the target');
    event.detail.target.el.removeEventListener('collide', shootCollided);
    myScene.removeChild(event.detail.target.el);
    myScene.removeChild(event.detail.body.el);
    
    // Incrementar el puntaje y actualizar el texto en pantalla
    const scoreText = document.getElementById('scoreText');
    let score = parseInt(scoreText.getAttribute('value').split(':')[1].trim()); // Obtener el puntaje actual
    score++;
    scoreText.setAttribute('value', `Score: ${score}`);
    
    // Verificar si todos los elementos objetivo han sido eliminados
    if (document.querySelectorAll('.target').length === 0) {
      console.log('you win');
    }
  }
};

document.onkeydown = event => {
  if (event.which == 32) {
    shoot();
  }
};

