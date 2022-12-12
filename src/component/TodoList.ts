import {Todo} from "./Todo";
import {computed, makeObservable, observable} from "mobx";

export class TodoList {
    todos: Todo[] = []
    get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length
    }
    constructor(todos: Todo[]) {
        makeObservable(this, {
            todos: observable,
            unfinishedTodoCount: computed
        })
        this.todos = todos
    }
}