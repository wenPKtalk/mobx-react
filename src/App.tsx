import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Sidenav from './component/Sidenav';
import Home from "./pages/Home";
import Explore from "./pages/Explore";

function App() {
    return (
        <div className="App">
            <Sidenav/>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/explore" element={<Explore/>}/>
                </Routes>
            </main>
        </div>
    );
}

export default App;
