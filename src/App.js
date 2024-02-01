import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import NavigationBar from './Navigationbar';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Home from "./Home";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NavigationBar />}>
              <Route index element={<Home />}/>
              <Route path="projects" element={<Projects />}/>
              <Route path="about" element={<About />}/>
              <Route path="contact" element={<Contact />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;


