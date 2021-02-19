const loader = new THREE.TextureLoader();
let scene;
let free_camera;
let renderer, controls;

import { vector } from "./vector.js";

import { physic_object } from "./physic_object.js";

function make_box(vector) {
    return new THREE.Mesh(new THREE.BoxGeometry(vector.x, vector.y, vector.z),
        new THREE.MeshBasicMaterial({ color: 0x49126b }));
}
function make_box_frame(vector) {
    return new THREE.LineSegments(
        new THREE.WireframeGeometry(
            new THREE.BoxGeometry(
                vector.x + 0.01, vector.y + 0.01, vector.z + 0.01, 1, 1, 1
            )),
        new THREE.LineBasicMaterial({ color: 0xff59fc, linewidth: 4 }));
}


let pb;
let box_lines;
function init() {

    scene = new THREE.Scene();

    free_camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    free_camera.position.z = 20;

    scene.background = new THREE.CubeTextureLoader().setPath('../textures/skybox/').load([
        'px.png',
        'nx.png',
        'py.png',
        'ny.png',
        'pz.png',
        'nz.png'
    ]);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);


    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // defaul



    controls = new THREE.OrbitControls(free_camera, renderer.domElement);
    controls.update();

    let v = new vector(1, 1, 1);

    let ground = make_box(v);
    let ground_lines = make_box_frame(v);
    scene.add(ground);
    scene.add(ground_lines);


    let box = make_box(v);
    box_lines = make_box_frame(v);

    scene.add(box);
    scene.add(box_lines);



    document.body.appendChild(renderer.domElement);

    let b = new vector(1, 2, 3);
    let c = new vector(1, 3, 4);

    pb = new physic_object(new vector(0, 10, 0), box);

    box_lines.position.copy(pb.get_position());

    console.log(v);

    render();
}




function render() {

    renderer.render(scene, free_camera);

    pb.applay_vector(new vector(0, 0.1, 0));

    box_lines.position.copy(pb.get_position());


    requestAnimationFrame(render);
}
init();
