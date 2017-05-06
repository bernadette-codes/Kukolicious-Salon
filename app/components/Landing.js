const React = require('react'),
    // Modules
    Footer = require('./Footer');

class Landing extends React.Component {
    render() {
        return (
            <div>
                <main className="container-fluid">
                    <div id="thumbnail-slider">
                        <div className="inner">
                            <ul>
                                <li><a className="thumb" href="app/img/salon1.jpg">img1</a></li>
                                <li><a className="thumb" href="app/img/salon2.jpg">img2</a></li>
                                <li><a className="thumb" href="app/img/salon3.jpg">img3</a></li>
                                <li><a className="thumb" href="app/img/salon4.jpg">img4</a></li>
                            </ul>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        )
    }
}

module.exports = Landing;
