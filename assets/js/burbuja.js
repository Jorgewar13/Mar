AFRAME.registerComponent('bubble-position', {
    tick: function () {
      let bubbleModel = this.el;
      let camera = document.querySelector('a-camera');
  
      // Obtener la posición y orientación de la cámara
      let cameraPosition = new THREE.Vector3();
      let cameraRotation = new THREE.Euler();
      camera.object3D.getWorldPosition(cameraPosition);
      camera.object3D.getWorldQuaternion(cameraRotation);
  
      // Calcular la dirección del cursor (frente de la cámara)
      let cursorDirection = new THREE.Vector3(0, 0, -1);
      cursorDirection.applyEuler(cameraRotation);
  
      // Establecer la posición de la burbuja justo en frente de la cámara
      let distance = 2; // Distancia desde la cámara
      let bubblePosition = new THREE.Vector3();
      bubblePosition.copy(cameraPosition).add(cursorDirection.multiplyScalar(distance));
      bubbleModel.setAttribute('position', bubblePosition);
    }
  });
  