//imports
import * as THREE from 'three';
//scene initialization
import {
  camera,
  scene,
  renderer,
  createSphere,
  createCube,
  objectArray,
} from './init';

//You can change the camera position on the X, Y, or Z axis
camera.position.set(0, 0, 10);

const clock = new THREE.Clock();

//Any code to initialize your objects should go here.
//Any object created using createSphere() or createCube()
//Will be added to an array named 'objectArray'

createSphere();
createCube();
createSphere();
createCube();
createSphere();

for (let i = 0; i < objectArray.length; i++) {
  //how far apart the objects will be
  const margin = 3;
  //move the objects so they will be in the center of the screen
  const mid = (objectArray.length - 1) * 0.5 * margin;
  objectArray[i].position.x = i * margin - mid;
  console.log(objectArray[i].position);
}

const loop = () => {
  //You can use the clock get elapsed time method to get the time since the start of the program
  clock.getElapsedTime();
  //Any code that will need to be updated on each frame should go here

  //update scene on next frame
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
};

loop();
