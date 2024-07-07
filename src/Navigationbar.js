import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Navigationbar.css';
import './Colors.css'; // If you have a separate file for colors

const NavigationBar = () => {
    return (
        <>
            <nav className="top-navigation">
                <ul>
                    <li className="topnav-left">Freja Marie Madsen</li>
                    <div className="topnav-right">
                        <li><Link to="/" className="nav-link">Home</Link></li>
                        <li><Link to="/projects" className="nav-link">Projects</Link></li>
                        <li><Link to="/about" className="nav-link">About</Link></li>
                        {/*<li><Link to="/contact">Contact</Link></li>*/}
                    </div>
                </ul>
            </nav>

            <Outlet />
        </>
    );
};

export default NavigationBar;