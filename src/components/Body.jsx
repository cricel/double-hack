import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Jitsi from "./Jitsi";

class Body extends Component {
    render() {
        return (
            <Container>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/about" exact component={About}></Route>
                        <Route path="/zoom" exact component={Jitsi}></Route>
                    </Switch>
                </Router>
            </Container>
        );
    }
}

export default Body;