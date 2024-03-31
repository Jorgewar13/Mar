
const shoot = () => {
  const bullet = document.createElement("a-sphere");
  let pos = myCamera.getAttribute("position");
  bullet.setAttribute("position", pos);
  bullet.setAttribute("velocity", getDirection(myCamera, 30));
  bullet.setAttribute("dynamic-body", true);
  bullet.setAttribute("radius", 0.5);
  bullet.setAttribute("src", "https://i.imgur.com/H8e3Vnu.png");
  myScene.appendChild(bullet);
  bullet.addEventListener('collide', shootCollided);
};

const shootCollided = event => {
  if (event.detail.body.el.id === 'floor') {
    console.log('Hit the floor');
    event.detail.target.el.removeEventListener('collide', shootCollided);
    myScene.removeChild(event.detail.target.el);
  } else if (event.detail.body.el.className === 'target') {
    console.log('Hit the target!');
    event.detail.target.el.removeEventListener('collide', shootCollided);
    myScene.removeChild(event.detail.target.el);
    myScene.removeChild(event.detail.body.el);
  }
  if (document.querySelectorAll('.target').length === 0) {
    console.log('You win!');
  
  }
};

document.onkeydown = event => {
  if(event.which == 32){
  shoot();
  }
};


// event.key === 32

// function actualizarPuntaje() {
//   const scoreText = document.getElementById('scoreText');
//   let score = parseInt(scoreText.getAttribute('value').split(':')[1].trim()); // Obtener el puntaje actual
//   score++;
//   scoreText.setAttribute('value', `Score: ${score}`);
  
//   if (document.querySelectorAll('.target').length === 0) {
//     console.log('you win');
//   }
// }

// const shoot = () => {
//   const bullet = document.createElement("a-sphere");
//   let pos = myCamera.getAttribute("position");
//   bullet.setAttribute("position", pos);
//   bullet.setAttribute("velocity", getDirection(myCamera, 30));
//   bullet.setAttribute("dynamic-body", true);
//   bullet.setAttribute("radius", 0.5);
//   bullet.setAttribute("src", "https://images.unsplash.com/photo-1620503374956-c942862f0372?q");
//   myScene.appendChild(bullet);
//   bullet.addEventListener('collide', shootCollided); // cuando hay una collide(evento) choque entre objetos se activa la funcion shootCollided(manejador de ebventos)
// };

// const shootCollided = event => {
//   if (event.detail.body.id === 'floor') {
//     console.log('hit the floor');
//     event.detail.el.removeEventListener('collide', shootCollided);
//     myScene.removeChild(event.detail.target.el);
//   } else if (event.detail.body.el.className === 'target') {
//     console.log('hit the target');
//     event.detail.target.el.removeEventListener('collide', shootCollided);
//     myScene.removeChild(event.detail.target.el);
//     myScene.removeChild(event.detail.body.el);
    
//     actualizarPuntaje();
//   }
// };

// document.onkeydown = event => {
//   if (event.which == 32) {
//     shoot();
//   }
// };