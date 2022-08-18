//imports
import * as THREE from 'three';
//scene initialization
import { camera, scene, renderer } from './init';

//You can change the camera position on the X, Y, or Z axis
camera.position.set(0, 0, 10);

const demoBox = new THREE.Mesh(
  new THREE.BoxBufferGeometry(1, 1, 1),
  new THREE.MeshNormalMaterial()
);

scene.add(demoBox);

//Any code to initialize your objects should go here

const loop = () => {
  //Any code that will need to be updated on each frame should go here

  demoBox.rotateX(0.002);

  //update scene on next frame
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
};

loop();
