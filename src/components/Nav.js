import React from 'react';
import {
    NavLink
} from "react-router-dom";
import IMGBrand from '../img/kukolicious.jpg';

function NavBar() {
    return (
        <nav className="navbar">
            <ul className="nav">
                <li className="logo">
                    <NavLink to='/'><img src={IMGBrand} alt="Panettiere Bakeshop" className="brand" /></NavLink>
                </li>
                <li><NavLink to='/About'>About</NavLink></li>
                <li><NavLink to='/Services'>Services</NavLink></li>
                <li><NavLink to='/Gallery'>Gallery</NavLink></li>
            </ul>
        </nav>
    )
}

export default NavBar;
