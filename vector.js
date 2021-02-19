export class vector {


    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    add() {

        for (let i = 0; i < arguments.length; i++) {
            this.x += arguments[i].x;
            this.y += arguments[i].y;
            this.z += arguments[i].z;
        }
    }

    sub(other_vector) {
        this.x -= other_vector.x;
        this.y -= other_vector.y;
        this.z -= other_vector.z;
    }

}

export function add_vector(vec1, vec2) {
    solution = new vector(0, 0, 0);

    for (let i = 0; i < arguments.length; i++) {
        solution.x += arguments[i].x;
        solution.y += arguments[i].y;
        solution.z += arguments[i].z;
    }
    return solution;
}

export function sub_vector() {
    solution = new vector(0, 0, 0);

    for (let i = 0; i < arguments.length; i++) {
        solution.x -= arguments[i].x;
        solution.y -= arguments[i].y;
        solution.z -= arguments[i].z;
    }
    return solution;
}

