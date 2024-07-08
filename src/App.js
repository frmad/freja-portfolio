import React from 'react';
import {Routes, Route } from 'react-router-dom';
import './App.css';
import Projects from './routes/Projects';
import About from './routes/About';
import Contact from './routes/Contact';
import Recipes from './Project/RecipesProject/Recipes';
import Home from './routes/Home';

function App() {
    return (
        <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/recipes" element={<Recipes />} />
                </Routes>
        </div>
    );
}

export default App;