import React from 'react';
import Footer from './Footer';
import IMGnailDesign1 from '../img/nailDesign1.jpg';
import IMGnailDesign2 from '../img/nailDesign2.jpg';
import IMGnailDesign3 from '../img/nailDesign3.jpg';
import IMGnailDesign4 from '../img/nailDesign4.jpg';
import IMGnailDesign5 from '../img/nailDesign5.jpg';
import IMGnailDesign6 from '../img/nailDesign6.jpg';
import IMGnailDesign7 from '../img/nailDesign7.jpg';
import IMGnailDesign8 from '../img/nailDesign8.jpg';
import IMGnailDesign9 from '../img/nailDesign9.jpg';
import IMGnailDesign10 from '../img/nailDesign10.jpg';
import IMGnailDesign11 from '../img/nailDesign11.jpg';
import IMGnailDesign12 from '../img/nailDesign12.jpg';
import IMGnailDesign13 from '../img/nailDesign13.jpg';
import IMGnailDesign14 from '../img/nailDesign14.jpg';
import IMGnailDesign15 from '../img/nailDesign15.jpg';
import IMGnailDesign16 from '../img/nailDesign16.jpg';

class Gallery extends React.Component {
    render() {
        const gallery = [
            { alt: 'leopard nail desig', photo: IMGnailDesign15 },
            { alt: '3 nail design', photo: IMGnailDesign13 },
            { alt: 'water transfer', photo: IMGnailDesign11 },
            { alt: 'glitter color nail', photo: IMGnailDesign14 },
            { alt: 'feather nail design', photo: IMGnailDesign7 },
            { alt: '3 color nail', photo: IMGnailDesign6 },
            { alt: 'symmetric nail design', photo: IMGnailDesign5 },
            { alt: '2 color dotted nail', photo: IMGnailDesign3 },
            { alt: 'leopard nail desig', photo: IMGnailDesign15 },
            { alt: '3 nail design', photo: IMGnailDesign13 },
            { alt: 'water transfer', photo: IMGnailDesign11 },
            { alt: 'glitter color nail', photo: IMGnailDesign14 },
            { alt: 'feather nail design', photo: IMGnailDesign7 },
            { alt: '3 color nail', photo: IMGnailDesign6 },
            { alt: 'symmetric nail design', photo: IMGnailDesign5 },
            { alt: '2 color dotted nail', photo: IMGnailDesign3 },
            { alt: 'glitter color nail', photo: IMGnailDesign10 },
            { alt: 'glitter nail design', photo: IMGnailDesign12 },
            { alt: '3 color nail', photo: IMGnailDesign4 },
            { alt: '3 color nail', photo: IMGnailDesign1 },
            { alt: 'symmetric nail design', photo: IMGnailDesign8 },
            { alt: 'symmetric design', photo: IMGnailDesign16 },
            { alt: 'heart nail design', photo: IMGnailDesign9 },
            { alt: '2 color nail', photo: IMGnailDesign2 }
        ];

        return (
            <div>
                <main className="container-fluid">

                    <ul className="gallery">
                        {gallery.map(function (img) {
                            return (
                                <li key={img.alt}>
                                    <img src={img.photo} alt={img.alt} className="img-thumbnail img-responsive" />
                                </li>
                            );
                        })}
                    </ul>
                </main>

                <Footer />
            </div>
        )
    }
}

export default Gallery;
