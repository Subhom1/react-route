import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {

    const navStyle = {
        color: 'white'
    };
    return (
        <nav>
            <Link to="/" style={navStyle}>
                <h3>React Home</h3>
            </Link>
            <ul className="navb">
                <Link style={navStyle} to="/about" >
                    <li>About</li>
                </Link>
                <Link style={navStyle} to="/shop">
                    <li>Shop</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
