import logo from "./logo.svg";
import React from 'react';
import './App.css'

function Home() {
    return (
        <div>
            <header className="App-header">
                <p>Hej Freja</p>
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default Home;

