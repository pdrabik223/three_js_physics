import { vector } from "./vector.js";


export class physic_object {

    mass = 1;

    static_friction = 0.2;
    dynamic_friction = 0.1;

    position = new vector(0, 0, 0);
    direction = new vector(0, 0, 0);
    velocity = new vector(0, 0, 0);
    rotation = new vector(0, 0, 0);


    object = new THREE.Mesh();


    //  rotation

    // bounce! 

    // perseverance Is a she 

    constructor(position, three_object) {
        this.position = position;
        this.object = three_object;
        this.object.position.set(position.x, position.y, position.z);
    }

    applay_vector(direction) {

        this.position.sub(direction);
        this.object.position.set(this.position.x, this.position.y, this.position.z);
    }

    step_forward(friction) {

        this.position = add(this.position, this.direction, - friction);
        this.object.position.set(this.position.x, this.position.y, this.position.zposition);
    }

    push(direction, velocity) {

        this.direction = direction;
        this.velocity = velocity;
        this.object.position.set(this.position.x, this.position.y, this.position.z);

    }
    get_position() {
        return new THREE.Vector3(this.position.x, this.position.y, this.position.z);
    }


}