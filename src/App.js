import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import Projects from './Project/Projects';
import About from './About/About';
import Contact from './Contact';
import Recipes from "./Project/RecipesProject/Recipes";
import Home from "./Home/Home";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="recipes" element={<Recipes />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;

//npm start will run the program