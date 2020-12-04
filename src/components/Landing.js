import React from 'react';
import IMGsalon1 from '../img/salon1.jpg';
import IMGsalon2 from '../img/salon2.jpg';
import IMGsalon3 from '../img/salon3.jpg';
import IMGsalon4 from '../img/salon4.jpg';

class Landing extends React.Component {
    render() {
        const salonPhotos = [
            { alt: 'Salon1', photo: IMGsalon1 },
            { alt: 'Salon2', photo: IMGsalon2 },
            { alt: 'Salon3', photo: IMGsalon3 },
            { alt: 'Salon4', photo: IMGsalon4 }
        ];

        return (
            <div>
                <main>
                    <ul className="photoSlide">
                        {salonPhotos.map(function (img) {
                            return (
                                <li key={img.alt}>
                                    <img src={img.photo} alt={img.alt} className="img-responsive" />
                                </li>
                            );
                        })}
                    </ul>
                </main>
            </div>
        )
    }
}

export default Landing;
