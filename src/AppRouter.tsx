import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

function AppRouter() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="todo/todo"/>
                </Routes>
            </BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to="todo/todo">todo</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default AppRouter;