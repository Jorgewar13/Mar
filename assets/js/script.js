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
// shootCollided: ijnfroma
const shootCollided = event => { //event:parametro| event es el objeto de evento que proporciona información sobre la colisión, como los objetos involucrados, las propiedades de la colisión, etc.
  if (event.detail.body.id ==='floor'){ //  se refiere a la etiqueta <plane>
    console.log('hit the floor');
    event.detail.el.removeEventListener('collide', shootCollided); //event.detail.el = <a-icosahedron> / ya no se ejecuta esta funcion
    myScene.removeChild(e.detail.target.el) //event.detail.el = <a-icosahedron>
  }else if (event.detail.body.el.className === 'target'){ //</a-icosahedron>
    console.log('hit the target');
    event.detail.target.el.removeEventListener('collide', shootCollided);
    myScene.removeChild(event.detail.target.el); //<a-icosahedron>
    myScene.removeChild(event.detail.body.el); //sphera
  }
  if(document.querySelectorAll('.target').length === 0){
    console.log('you win');
  }
};

document.onkeydown = event => {
  if (event.which == 32) {
    shoot();
  }
};