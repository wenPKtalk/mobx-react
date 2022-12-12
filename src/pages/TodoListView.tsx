import {observer} from "mobx-react-lite";
import {Todo} from "../component/Todo";
import {TodoList} from "../component/TodoList";


export const TodoListView = observer(({ todoList} : {
    todoList: TodoList
}) => (
    <div>
        <ul>
            {todoList.todos.map(todo => (
                <TodoView todo={todo} key={todo.id} />
            ))}
        </ul>
        Tasks left: {todoList.unfinishedTodoCount}
    </div>
))

const TodoView = observer(({ todo }: {todo: Todo}) => (
    <li>
        <input type="checkbox" checked={todo.finished} onClick={() => todo.toggle()} />
        {todo.title}
    </li>
))