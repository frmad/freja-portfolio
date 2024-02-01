import { Outlet, Link } from "react-router-dom";
import "./Navigationbar.css"

const NavigationBar = () => {
    return (
        <>
            <nav className="top-navigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>

            <Outlet/>
        </>
    )
};

export default NavigationBar;