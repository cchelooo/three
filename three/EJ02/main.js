import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.module.js';

const escena = new THREE.Scene();
const camara = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Primer cubo (más grande)
const geometria1 = new THREE.BoxGeometry(1, 1, 1);  // Tamaño 1x1x1
const material1 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cubo1 = new THREE.Mesh(geometria1, material1);
cubo1.position.set(-2, 0, 0); // Posición desplazada a la izquierda
escena.add(cubo1);

// Segundo cubo (más pequeño)
const geometria2 = new THREE.BoxGeometry(0.5, 0.5, 0.5);  // Tamaño 0.5x0.5x0.5
const material2 = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const cubo2 = new THREE.Mesh(geometria2, material2);
cubo2.position.set(2, 0, 0); // Posición desplazada a la derecha
escena.add(cubo2);

camara.position.z = 5;

function animar() {
  requestAnimationFrame(animar);

  // Rotación del primer cubo
  cubo1.rotation.x += 0.01;
  cubo1.rotation.y += 0.01;

  // Rotación del segundo cubo (con diferente velocidad)
  cubo2.rotation.x += 0.02;
  cubo2.rotation.y += 0.03;

  renderer.render(escena, camara);
}

animar();
