
import ReactDOM from 'react-dom'
import React from 'react'
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom'
import Animals from "./Pages/shelterAnimals";
import Home from "./Pages/index";
import Register from "./Pages/registerAnimal";
import Nav from "./Components/Navigation";
import RegisterAdopter from './Pages/registerAdopter';



ReactDOM.render(
    <div>
    <Router>
        <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/animals" element={<Animals />} />
                <Route path="/register" element={<Register />} />
                <Route path="/adopter" element={<RegisterAdopter />} />
            </Routes>
    </Router>
    </div>
    , document.getElementById('root')
);