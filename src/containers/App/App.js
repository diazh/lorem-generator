import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import LoremGenerator from '../../components/LoremGenerator/LoremGenerator';
import HomeComponent from '../../components/Home/Home'


class MainApp extends Component {
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <Switch>
                    <Route exact path='/home' component={HomeComponent} />
                    <Route exact path='/generator' component={LoremGenerator} />
                </Switch>

            </div>
        )
    }
}

export default MainApp;