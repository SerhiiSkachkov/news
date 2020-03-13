import React, { Component } from "react";
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import {News} from './News/News';
import './App.sass';
import '../assets/styles/bootstrap/bootstrap-grid.sass';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' render={() => <News/>}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;