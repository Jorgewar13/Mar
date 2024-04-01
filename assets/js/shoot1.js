AFRAME.registerComponent('click-to-shoot', {
  init: function () {
    let shootSound = document.getElementById('shootSound');
    let el = this.el;
    
    document.body.addEventListener('mousedown', () => { 
      el.emit('shoot');
      shootSound.components.sound.playSound();
    });
  }
});