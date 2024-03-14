const shoot = () => {
  const bullet = document.createElement("a-sphere");
  let pos = myCamera.getAttribute("position");
  bullet.setAttribute("position", pos);
  bullet.setAttribute("velocity", getDirection(myCamera, 30));
  bullet.setAttribute("dynamic-body", true);
  bullet.setAttribute("radius", 0.5);
  bullet.setAttribute("src", "https://i.imgur.com/H8e3Vnu.png ");
  myScene.appendChild(bullet);
  bullet.addEventListener('collide', shootCollided);
};

const shootCollided = event => {
  if (event.detail.body.id ==='floor'){
    console.log('hit the floor');
    event.detail.el.removeEventListener('collide', shootCollided);
    myScene.removeChild(e.detail.target.el)
  }else if (event.detail.body.el.className === 'target'){
    console.log('hit the target');
  }
};

document.onkeydown = event => {
  if (event.which == 32) {
    shoot();
  }
};