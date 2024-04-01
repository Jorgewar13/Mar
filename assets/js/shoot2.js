AFRAME.registerComponent("hit-handler", {
  init: function () {
    let el = this.el;
    let scene = document.querySelector("a-scene");
    let bubbleModel = document.getElementById("bubbleModel");
    let bubbleSound = document.getElementById("bubbleSound");

    el.addEventListener("die", () => {
      el.parentElement.removeChild(el);
      scene.emit("score", { points: 1 }); 
      bubbleModel.setAttribute("visible", true);
      bubbleSound.components.sound.playSound();

      
      setTimeout(() => {
        bubbleModel.setAttribute("visible", false);
        bubbleSound.components.sound.stopSound();
      }, 500);
    });
  },
});
