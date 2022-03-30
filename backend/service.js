class Entity {

    static userId = 'Entity';

    constructor(type, size) {
        this.type = type;
        this.size = size;
    }

}

class Person extends Entity {
    
    static userId = 'Person';

    constructor(type, size, name) {
        super(type, size);
        this.name = name;
    }

}

const newEntity = new Entity('alien', 'big');
const newPerson = new Person('human', 'small', 'Cristi');