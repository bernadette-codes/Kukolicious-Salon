const React = require('react'),
    // Modules
    Footer = require('./Footer');

class Services extends React.Component {
    render() {
        const nailColor = [
        {   "type": "Manicure",
            "lists": [
                ["Basic", "$11"],
                ["Buff", "$13"],
                ["French Manicure", "$15"],
                ["Spa", "$30"],
                ["Paraffin", "$20"],
                ["Color Gel", "$35"],
                ["Kids", "$7"],
                ["Polish Change", "$7"],
                ["Soak Off", "$7"],
                ["Nail Art", "$15 and up"]
            ]
        },
        {   "type": "Pedicure",
            "lists": [
                ["Basic", "$22"],
                ["Buff", "$25"],
                ["French Manicure", "$23"],
                ["Spa", "$55"],
                ["Paraffin", "$30"],
                ["Color Gel", "$55"],
                ["Kids", "$12"],
                ["Polish Change", "$12"],
                ["Soak Off", "$15"],
                ["Nail Art", "$26 and up"]
            ]
        }],
            massage = [
        {   "type": "Hand Massage",
            "lists": [
                    ["5 Minutes", "$10"],
                    ["10 Minutes", "$12"],
                    ["15 Minutes", "$17"]
                ]
        },
        {   "type": "Feet Massage",
            "lists": [
                    ["5 Minutes", "$15"],
                    ["10 Minutes", "$17"],
                    ["15 Minutes", "$22"]
                ]
        }],
            polish = [
        {   "type": "Premium Polishes",
            "lists": [
                    ["OPI", "$5"],
                    ["Chanel", "$4"],
                    ["Ciate", "$3"],
                    ["Deborah Lippmann", "$3"],
                    ["Zoya", "$3"]
                ]
        }];
        return (
            <div>
                <main className="container pricelist">
                    <img src="app/img/spaBanner1.jpg" alt="Nail Salon Banner" className="servicesBanner" />

                    <h2 className="indent">Services</h2>

                    <section className="row">
                        {nailColor.map(function(nailS){
                            return (
                                <div className="col-sm-6 col-xs-12" key={nailS.type}>
                                    <table className="table table-striped">
                                        <thead>
                                        <tr>
                                            <th>{nailS.type}</th>
                                            <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {nailS.lists.map(function(item, index){
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

                    <img src="app/img/divider.jpg" alt="divider" height="40" className="servicesdivider" />

                    <section className="row">
                        {massage.map(function(massageS){
                            return (
                                <div className="col-sm-6 col-xs-12" key={massageS.type}>
                                    <table className="table table-striped">
                                        <thead>
                                        <tr>
                                            <th>{massageS.type}</th>
                                            <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {massageS.lists.map(function(item, index){
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

                    <img src="app/img/divider.jpg" alt="divider" height="40" className="servicesdivider" />

                    <section className="row">
                        {polish.map(function(polishS){
                            return (
                                <div className="col-sm-6 col-xs-12" key={polishS.type}>
                                    <table className="table table-striped">
                                        <thead>
                                        <tr>
                                            <th>{polishS.type}</th>
                                            <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {polishS.lists.map(function(item, index){
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

                    <p>Tax not included in pricing</p>

                    <img src="app/img/spaBanner.jpg" alt="Nail Salon Banner" className="servicesBanner" />
                </main>

                <Footer />
            </div>
        )
    }
}

module.exports = Services;
