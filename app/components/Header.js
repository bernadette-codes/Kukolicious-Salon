const React = require('react'),
    // Modules
    NavBar = require('./Nav');

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="nav-wrap">
                    <h1>Kukolicious Nail and Spa</h1>
                    <img src="app/img/kukolicious.jpg" alt="Kukolicious Nail and Spa" className="smallBrand" />

                    <NavBar />
                </div>
            </header>
        )
    }
}

module.exports = Header;
