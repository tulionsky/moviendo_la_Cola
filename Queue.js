// Clase de la cola, aqui solo se implementa la estructura de datos de la cola👍
export class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    front() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[0];
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }
}