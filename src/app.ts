import * as $ from 'jquery/dist/jquery.slim';
import {
    GridHelper, Mesh, MeshBasicMaterial, PerspectiveCamera, PlaneGeometry, Scene, TextureLoader,
    WebGLRenderer
} from "three";


let scene = new Scene();
let camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

let renderer = new WebGLRenderer({
    alpha: true
});

renderer.setSize(window.innerWidth, window.innerHeight);

$('body').append(renderer.domElement);


let geometry = new PlaneGeometry(0.1, 1);
let material = new MeshBasicMaterial({color: 0x00ff00});
camera.position.z = 5;

let stickmanMaterial: MeshBasicMaterial = new MeshBasicMaterial({color: 'black'});
let stickman: Mesh = new Mesh(geometry, stickmanMaterial);
stickman.position.z = 4;
stickman.position.x = 0.5;
scene.add(stickman);

let grid = new GridHelper(10,10);
grid.rotateX(Math.PI * 0.5);
scene.add(grid);
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
window.onkeydown =  (e) => {
    console.log(e.code);
    switch (e.code) {
        case 'ArrowDown':
            stickman.position.y -= 0.1;
            break;
        case 'ArrowUp' :
            stickman.position.y += 0.1;
            break;
        case 'ArrowLeft':
            stickman.position.x -= 0.1;
            break;
        case 'ArrowRight':
            stickman.position.x += 0.1;
            break;
        case 'Enter':
            stickman.position.z -= 0.1;
            break;
        case 'Space':
            stickman.rotateZ(Math.PI * 0.2)

    }
};

window.document.querySelectorAll("#test")[0].addEventListener('click', () => {
    stickman.position.z += 0.1;
});

animate();