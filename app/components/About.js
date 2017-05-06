const React = require('react'),
    // Modules
    Footer = require('./Footer');

class About extends React.Component {
    render() {
        const photoTop = [
            { alt: 'Salon1', photo: 'app/img/salon1.jpg'},
            { alt: 'Salon2', photo: 'app/img/salon2.jpg'}
        ],
            photoBottom = [
            { alt: 'Salon3', photo: 'app/img/salon3.jpg'},
            { alt: 'Salon4', photo: 'app/img/salon4.jpg'}
        ];


        return (
            <div>
                <main className="container-fluid about">
                    <section className="row grid">
                        {photoTop.map(function(img){
                            return (
                            <div className="col-xs-6" key={img.alt}>
                                <div className="thumbnail">
                                    <img src={img.photo} alt={img.alt} className="img-responsive" />
                                </div>
                            </div>
                            );
                        })}
                    </section>
                    <div id="overlay"></div>
                    <div id="overlayContent">
                        <img id="imgBig" src="" alt="Salon"/>
                    </div>

                    <section className="text-center">
                        <h2>Welcome to our nail salon where we look forward to taking care of you in a relaxed and comfortable environment.</h2>

                        <p>Here at Kukolicious, it's more than simply 'getting your nails done', it's about the experience that goes along with it.</p>

                        <p>Pick from a variety of quality nail polishes from Essie to Chanel and pick a color that correlates with your mood.</p>

                        <p>Sip on some freshly infused lime with water with every service and enjoy being taken care of.</p>

                        <p>Hope to see you soon!</p>
                    </section>

                    <section className="row grid">
                        {photoBottom.map(function(img){
                            return (
                                <div className="col-xs-6" key={img.alt}>
                                    <div className="thumbnail">
                                        <img src={img.photo} alt={img.alt} className="img-responsive" />
                                    </div>
                                </div>
                            );
                        })}
                    </section>
                </main>

                <Footer />
            </div>
        )
    }
}

module.exports = About;
