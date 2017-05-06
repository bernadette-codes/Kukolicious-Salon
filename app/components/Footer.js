const React = require('react');

function Footer () {
    return (
        <footer className="container text-center">
            <hr />
                <p className="salonName">Kukolicious Nail & Spa</p>
                <address>45 Rockefeller Plaza, New York, NY 10111</address>
                <p>
                    <small>Copyright © 2017 Kukolicious Nail & Spa. All rights reserved.<br />
		            <span className="small">Designed and created by:
			            <a href="http://www.bernadetteengleman.com" target="_blank">Bernadette Engleman</a>
                        <small>&#128279;</small>
		            </span>
                </small></p>
        </footer>
    )
}

module.exports = Footer;
