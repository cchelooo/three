import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.module.js';

const escena = new THREE.Scene();
const camara = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometria = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cubo = new THREE.Mesh(geometria, material);
escena.add(cubo);
camara.position.z = 5;

function animar() {
  requestAnimationFrame(animar);
  cubo.rotation.x += 0.01;
  cubo.rotation.y += 0.01;
  renderer.render(escena, camara);
}

animar();