const React = require('react'),
    NavLink = require('react-router-dom').NavLink;

function NavBar () {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbarbtn">
                        <span>Menu</span>
                    </button>
                </div>

                <div className="collapse navbar-collapse" id="navbarbtn">
                    <ul className="nav navbar-nav">
                        <li className="logo hidden-xs">
                            <img src="app/img/kukolicious.jpg" alt="Panettiere Bakeshop" className="brand" />
                        </li>
                        <li><NavLink activeClassName='active' to='/About' className="menu">About</NavLink></li>
                        <li><NavLink activeClassName='active' to='/Services' className="menu">Services</NavLink></li>
                        <li><NavLink activeClassName='active' to='/Gallery' className="menu">Gallery</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

module.exports = NavBar;
