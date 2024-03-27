AFRAME.registerComponent('log', {
  
  init: function () {
    var debugtxt = document.querySelector('a-text');
    debugtxt.setAttribute('value', 'goodnite');
  }
});

AFRAME.registerComponent('thumbstick-logging',{
  init: function () {
    this.el.addEventListener('thumbstickmoved', this.logThumbstick.bind(this));
  },
  logThumbstick: function (evt) {
    var debugtxt = document.querySelector('a-text');
    var cameraRig = document.querySelector('#cameraRig');
    
    if (evt.detail.y > 0.95) { 
      debugtxt.setAttribute("value","DOWN"); 
      cameraRig.object3D.translateZ(0.05);
    }
    if (evt.detail.y < -0.95) { 
      debugtxt.setAttribute("value","UP");
      cameraRig.object3D.translateZ(-0.05);
    }    
    if (evt.detail.x < -0.95) { 
      debugtxt.setAttribute("value","LEFT");
      cameraRig.object3D.rotateY(THREE.Math.degToRad(5));
    }
    if (evt.detail.x > 0.95) { 
      debugtxt.setAttribute("value","RIGHT");
      cameraRig.object3D.rotateY(THREE.Math.degToRad(-5));
    }
  }
});

AFRAME.registerComponent('collider-check', {
  dependencies: ['raycaster'],

  init: function () {
   
    console.log('ok collider check');
    var debugtxt = document.querySelector('a-text');
    
    this.el.addEventListener('raycaster-intersection', function (e) {
     //-- get selected object
      this.selectedObj = e.detail.els[0];
      debugtxt.setAttribute('value', 'Player hit something!');
    });
    
    //-- grip button pressed
    this.el.addEventListener('gripdown', function (e) {
        this.grip = true;
        debugtxt.setAttribute('value', 'Grip button pressed');
    });
    
    //-- grip button released
    this.el.addEventListener('gripup', function (e) {
        this.grip = false;
        debugtxt.setAttribute('value', 'Grip button released');
    });
  },
  
  tick: function(){
    if(!this.el.selectedObj) return;
    if(!this.el.grip) return;
    
    
    var raycast = this.el.getAttribute("raycaster").direction;
    
    var pos = new THREE.Vector3(raycast.x, raycast.y, raycast.z);
    pos.normalize();
    
    //-- final destination of object will be 2m in front of ray
    pos.multiplyScalar(2);
              
    //-- convert to world coordinate
    this.el.object3D.localToWorld(pos);
    
    //Move selected object to follow the tip of raycaster.
    this.el.selectedObj.object3D.position.set(pos.x, pos.y, pos.z);
    
    
    if (this.el.selectedObj.components["dynamic-body"]) {
      this.el.selectedObj.components["dynamic-body"].syncToPhysics();
    }
  }
});