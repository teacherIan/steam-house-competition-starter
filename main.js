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

const clock = new THREE.Clock();

//Any code to initialize your objects should go here

const loop = () => {
  //You can use the clock get elapsed time method to get the time since the start of the program
  clock.getElapsedTime();
  //Any code that will need to be updated on each frame should go here

  //have the box rotate each frame:
  demoBox.rotateX(0.002);

  //update scene on next frame
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
};

loop();
