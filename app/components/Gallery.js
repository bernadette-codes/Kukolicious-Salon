const React = require('react'),
    $ = require("jquery"),
    // Modules
    Footer = require('./Footer');


class Gallery extends React.Component {
    render() {
        const galleryR1 = [
            { alt1: 'leopard nail desig', photo1: 'app/img/nailDesign15.jpg',
                alt2: '3 nail design', photo2: 'app/img/nailDesign13.jpg'},
            { alt1: 'water transfer', photo1: 'app/img/nailDesign11.jpg',
                alt2: 'glitter color nail', photo2: 'app/img/nailDesign14.jpg'},
            { alt1: 'feather nail design', photo1: 'app/img/nailDesign7.jpg',
                alt2: '3 color nail', photo2: 'app/img/nailDesign6.jpg'},
            { alt1: 'symmetric nail design', photo1: 'app/img/nailDesign5.jpg',
                alt2: '2 color dotted nail', photo2: 'app/img/nailDesign3.jpg'}
        ],
            galleryR2 = [
                { alt1: 'glitter color nail', photo1: 'app/img/nailDesign10.jpg',
                    alt2: 'glitter nail design', photo2: 'app/img/nailDesign12.jpg'},
                { alt1: '3 color nail', photo1: 'app/img/nailDesign4.jpg',
                    alt2: '3 color nail', photo2: 'app/img/nailDesign1.jpg'},
                { alt1: 'symmetric nail design', photo1: 'app/img/nailDesign8.jpg',
                    alt2: 'symmetric design', photo2: 'app/img/nailDesign16.jpg'},
                { alt1: 'heart nail design', photo1: 'app/img/nailDesign9.jpg',
                    alt2: '2 color nail', photo2: 'app/img/nailDesign2.jpg'}
            ];

        return (
            <div>
                <main className="container dynamicTile">

                    <section className="row">
                        {galleryR1.map(function(img, index){
                            return (
                                <div className="col-sm-3 col-xs-6" key={index}>
                                    <div className="tile">
                                        <div className="carousel slide" data-ride="carousel">
                                            <div className="carousel-inner">
                                                <div className="item active">
                                                    <img src={img.photo1} alt={img.alt1} className="img-responsive" />
                                                </div>
                                                <div className="item">
                                                    <img src={img.photo2} alt={img.alt2} className="img-responsive" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </section>

                    <section className="row">
                        {galleryR2.map(function(img, index){
                            return (
                                <div className="col-sm-3 col-xs-6" key={index}>
                                    <div className="tile">
                                        <div className="carousel slide" data-ride="carousel">
                                            <div className="carousel-inner">
                                                <div className="item active">
                                                    <img src={img.photo1} alt={img.alt1} className="img-responsive" />
                                                </div>
                                                <div className="item">
                                                    <img src={img.photo2} alt={img.alt2} className="img-responsive" />
                                                </div>
                                            </div>
                                        </div>
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

module.exports = Gallery;
