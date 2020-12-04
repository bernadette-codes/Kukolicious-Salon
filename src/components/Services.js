import React from 'react';
import Footer from './Footer';
import IMGbanner from '../img/spaBanner.jpg';
import IMGbanner1 from '../img/spaBanner1.jpg';
import IMGdivider from '../img/divider.jpg';

class Services extends React.Component {
    render() {
        const gelNails = [
            {
                "type": "Gel Nails",
                "lists": [
                    ["Gel Manicure (Standard)", "P800"],
                    ["Gel French Manicure", "P850"],
                    ["Gel Pedicure", "P850"],
                    ["Gel French Pedicure", "P870"],
                    ["Gel Sculptured Nails", "P2,300"],
                    ["Gel Nail Repair", "P1,600"],
                    ["Gel Floaters", "P1,500"],
                ]
            },
            {
                "type": "Acrylic Extensions",
                "lists": [
                    ["Acrylic Sculptured", "P2,300"],
                    ["Tip Extension", "P2,300"],
                    ["Acrylic Floaters", "P1,500"],
                    ["Acrylic Fill In", "P1,600"],
                    ["Acrylic Off Removal", "P550"],
                ]
            }],
            waxing = [
                {
                    "type": "Waxing",
                    "lists": [
                        ["Fingers", "P100"],
                        ["Hand", "P200"],
                        ["Feet", "P240"],
                        ["Half Arm", "P420"],
                        ["Full Arm", "P520"],
                        ["Under Arm", "P350"],
                        ["Half Leg", "P520"],
                        ["Full Leg", "P850"],
                        ["Bikini", "P620"],
                        ["Brazilian", "P850"]
                    ]
                },
                {
                    "type": "Threading",
                    "lists": [
                        ["Upper Lip", "P180"],
                        ["Eyebrow", "P220"],
                        ["Chin", "P100"],
                        ["Cheek", "P150"],
                        ["Full Face", "P450"]
                    ]
                }],
            massage = [
                {
                    "type": "Back Massage",
                    "lists": [
                        ["30 min", "P320"],
                        ["45 min", "P420"]
                    ]
                },
                {
                    "type": "Reflexology",
                    "lists": [
                        ["Hand (30min)", "P250"],
                        ["Hand (45min)", "P320"],
                        ["Foot (30min)", "P320"],
                        ["Foot (45min)", "P420"]
                    ]
                }];
        return (
            <div>
                <main className="container pricelist">
                    <img src={IMGbanner1} alt="Nail Salon Banner" className="servicesBanner" />

                    <h2 className="indent">Services</h2>

                    <section className="row">
                        {gelNails.map(function (nailS) {
                            return (
                                <div className="col-sm-12" key={nailS.type}>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>{nailS.type}</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {nailS.lists.map(function (item, index) {
                                                return (
                                                    <tr key={index}>
                                                        <td>{item[0]}</td>
                                                        <td>{item[1]}</td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            );
                        })}
                    </section>

                    <p>Prices ranges depending on detail of design</p>

                    <img src={IMGdivider} alt="divider" height="40" className="servicesdivider" />

                    <section className="row">
                        {waxing.map(function (waxing) {
                            return (
                                <div className="col-sm-6 col-xs-12" key={waxing.type}>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>{waxing.type}</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {waxing.lists.map(function (item, index) {
                                                return (
                                                    <tr key={index}>
                                                        <td>{item[0]}</td>
                                                        <td>{item[1]}</td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            );
                        })}
                    </section>

                    <img src={IMGdivider} alt="divider" height="40" className="servicesdivider" />

                    <section className="row">
                        {massage.map(function (massage) {
                            return (
                                <div className="col-sm-6 col-xs-12" key={massage.type}>
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>{massage.type}</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {massage.lists.map(function (item, index) {
                                                return (
                                                    <tr key={index}>
                                                        <td>{item[0]}</td>
                                                        <td>{item[1]}</td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            );
                        })}
                    </section>

                    <img src={IMGbanner} alt="Nail Salon Banner" className="servicesBanner" />
                </main>

                <Footer />
            </div>
        )
    }
}

export default Services;
