import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import GetInformation from './GetInformation';
import GenerateFile from './GenerateFile';
import GrillsNoteSouth from './GrillsNoteSouth';
import Error from './Error';

class Router extends Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/inicia-sesion" component={ Login }/>
                    <Route exact path="/registrate" component={ Register }/>
                    <Route exact path="/obtener-informacion" component={ GetInformation }/>
                    <Route exact path="/generar-archivo" component={ GenerateFile }/>
                    <Route exact path="/parrillas-norte-sur" component={ GrillsNoteSouth }/>
                    <Route component={ Error }/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;
