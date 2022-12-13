import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Sidenav from './component/Sidenav';
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import {TodoListView} from "./pages/TodoListView";
import {TodoList} from "./component/TodoList";
import {Todo} from "./component/Todo";
import {TimerView} from "./pages/Timer";

function App() {
    const store = new TodoList([new Todo("Get Coffee"), new Todo("Write simpler code")])

    return (
        <div className="App">
            <Sidenav/>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/explore" element={<Explore/>}/>
                    <Route path="/todo-list-view" element={<TodoListView todoList={store}/>}/>
                    <Route path="/timer" element={<TimerView/>}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;
