import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './homestylegot.css'
import { BrowserRouter, Switch, Route, NavLink ,Redirect} from 'react-router-dom';
import {Home,SumRouting,Blocking,NoMatch,Miss} from "./Components";
import fakeAuth from './Auth';
class App extends Component {

  render() {
    return (
        <BrowserRouter>
            <div className="Text">
                <div className="col-md-push-7">
                    <ul>
                        <li><a><NavLink to="/" activeClassName="active" >CAL</NavLink> </a></li>
                        <li><a> <NavLink to="/SumRouting" activeClassName="active">SHOW</NavLink></a></li>
                    </ul>
                </div>
                <div className="App-intro">
                    <Switch>
                        <Route path="/" component={Home} exact={true} />
                        <Route path="/SumRouting/:sum" component={SumRouting} />
                        <Route path="/Miss" component={Miss} />
                        <Route path="/Blocking" component={Blocking} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
