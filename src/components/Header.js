import React from 'react';
import {
    NavLink
} from "react-router-dom";
import NavBar from './Nav';
import IMGsmallBrand from '../img/kukolicious.jpg';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="nav-wrap">
                    <h1>Kukolicious Nail and Spa</h1>
                    <NavLink activeClassName='active' to='/'>
                        <img src={IMGsmallBrand} alt="Kukolicious Nail and Spa" className="smallBrand" />
                    </NavLink>

                    <NavBar />
                </div>
            </header>
        )
    }
}

export default Header;
