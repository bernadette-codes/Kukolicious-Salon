import React from 'react';
import Footer from './Footer';
import IMGsalon1 from '../img/salon1.jpg';
import IMGsalon2 from '../img/salon2.jpg';
import IMGsalon3 from '../img/salon3.jpg';
import IMGsalon4 from '../img/salon4.jpg';

class About extends React.Component {
    render() {
        const photoTop = [
            { alt: 'Salon1', photo: IMGsalon1 },
            { alt: 'Salon2', photo: IMGsalon2 }
        ],
            photoBottom = [
                { alt: 'Salon3', photo: IMGsalon3 },
                { alt: 'Salon4', photo: IMGsalon4 }
            ];


        return (
            <div>
                <main className="about text-center">
                    <h2>Welcome to Kukolicious nail salon!</h2>

                    <section className="salonPhotos">
                        {photoTop.map(function (img) {
                            return (
                                <div key={img.alt}>
                                    <a href={"#" + img.alt}>
                                        <img src={img.photo} alt={img.alt} className="img-responsive" />
                                    </a>
                                </div>
                            );
                        })}
                    </section>

                    <section className="aboutContent">
                        <h3>Location</h3>
                        <p className="details">El Grande Ave, BF Homes, Parañaque</p>

                        <h3>Hours</h3>
                        <p className="details">Open every day from 11:00 am to 9:00 pm</p>
                        <p>We look forward to taking care of you in a relaxed and comfortable environment.</p>

                        <p>Here at Kukolicious, it's more than simply 'getting your nails done', it's about the experience that goes along with it.</p>

                        <p>Pick from a variety of quality nail polishes from Essie to Chanel and pick a color that correlates with your mood.</p>

                        <p>Sip on some freshly infused lime with water with every service and enjoy being taken care of.</p>

                        <p>Hope to see you soon!</p>
                    </section>

                    <section className="salonPhotos">
                        {photoBottom.map(function (img) {
                            return (
                                <div key={img.alt}>
                                    <a href={"#" + img.alt}>
                                        <img src={img.photo} alt={img.alt} className="img-responsive" />
                                    </a>
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

export default About;
