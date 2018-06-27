import { observable } from 'mobx';

class Store {

    // constructor() {
    //     this.todos = [];
    // }

    @observable todos = []; 

    addToDo(task) {
        this.todos.push(task);
    }

    // get todos() {
    //     return this.todos;
    // }

    // set todos(todos) {
    //     this.todos = todos;
    // }
}

export default Store;