import * as $ from 'jquery/dist/jquery.slim';
import {BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer} from "three";

let scene = new Scene();
let camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

let renderer = new WebGLRenderer({
    alpha: true
});

renderer.setSize(window.innerWidth, window.innerHeight);

$('body').append(renderer.domElement);


let geometry = new BoxGeometry(1,1,1);
let material = new MeshBasicMaterial({color: 0x00ff00});
let cube = new Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
animate();