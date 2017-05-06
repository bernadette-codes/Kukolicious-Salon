const React = require('react'),
    ReactRouter = require('react-router-dom'),
    Router = ReactRouter.BrowserRouter,
    Route = ReactRouter.Route,
    Switch = ReactRouter.Switch,
    // Modules
    Header = require('./Header'),
    Landing = require('./Landing'),
    About = require('./About'),
    Services = require('./Services'),
    Gallery = require('./Gallery');

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
                        <Route exact  path='/Gallery' component={Gallery} />
                        <Route render={ function () {
                            return <p>Not Found</p>
                        }} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

module.exports = Main;
