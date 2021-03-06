// Import modules
import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

//Import components
import HeroContainer from './containers/HeroContainer/HeroContainer.js';
import NavBarContainer from './containers/NavBarContainer/NavBarContainer.js';
import _Main from './layouts/_Main.js';
import _Preview from './layouts/_Preview.js';
import Preview from './components/Preview/Preview.js';

const browserHistory = Router.browserHistory;

/**
 * @description 
 * 
 * @export
 * @class AppRoute
 * @extends {Component}
 */
export default class AppRoute extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Switch>
                    <_Main>
                        <Route path="/" component={NavBarContainer} />
                        <_Preview>
                            <Route path="/:id" component={Preview} />
                        </_Preview>
                        <Route path="/" component={HeroContainer} />
                        <Route path="/?sort=:show" component={HeroContainer} />
                    </_Main>
                </Switch>
            </Router>
        );
    }
}