import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import App from './App';
import SignUpPage from './views/signUpPage';
import About from './views/about';
import NotFound from './views/notFound'


class Routes extends Component {
    render() {
        return (<BrowserRouter>
            <div>
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route path='/signUp' component={SignUpPage} />
                    <Route path='/about' component={About} />
                    {/* <Route path='/address' component={Address} />
                    <Route path='/policyForm' component={PolicyForm} />
                    <Route path='/formExample' component={FormExample} /> */}
                    <Route component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>

        )
    }
};

export default Routes;
