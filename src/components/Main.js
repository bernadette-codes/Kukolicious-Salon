import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Header from './Header';
import Landing from './Landing';
import About from './About';
import Services from './Services';
import Gallery from './Gallery';

class Main extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />

                    <Switch>
                        <Route exact path='/' component={Landing} />
                        <Route exact path='/About' component={About} />
                        <Route exact path='/Services' component={Services} />
                        <Route exact path='/Gallery' component={Gallery} />
                        <Route render={function () {
                            return <p>Not Found</p>
                        }} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Main;
