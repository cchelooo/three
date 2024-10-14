import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.module.js';
const escena = new THREE.Scene(); // Escena y cámara
const camara = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometria = new THREE.BoxGeometry(3, 3, 3); // Geometría del cubo

const textureLoader = new THREE.TextureLoader(); // Textura y materiales avanzados
const envMap = new THREE.CubeTextureLoader()
  .setPath('texturas/cubo/ ')
  .load([
    'px.jpg', 'nx.jpg',
    'py.jpg', 'ny.jpg',
    'pz.jpg', 'nz.jpg'
  ]);

const material = new THREE.MeshPhysicalMaterial({
  color: 0x00ff00,
  roughness: 0.5,
  metalness: 0.7,
  envMap: envMap,
  clearcoat: 1.0, // Para añadir brillo adicional
  clearcoatRoughness: 0.1,
  reflectivity: 1
});

const cubo = new THREE.Mesh(geometria, material); // Crear el cubo con material
escena.add(cubo);

const luzAmbiente = new THREE.AmbientLight(0x404040); // Luz suave general
escena.add(luzAmbiente);

const luzPuntual = new THREE.PointLight(0xffffff, 1, 100);
luzPuntual.position.set(5, 5, 5);
escena.add(luzPuntual);

camara.position.z = 5; // Cámara y ciclo de renderizado
function animar() {
  requestAnimationFrame(animar);
  cubo.rotation.x += 0.01;
  cubo.rotation.y += 0.01;
  renderer.render(escena, camara);
}

animar();