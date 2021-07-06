import React, { Component } from 'react';
import { Button } from "react-bootstrap";

class Home extends Component {
    state = {
        counter: 0,
    }

    increment_counter(){
        this.setState({counter: this.state.counter + 1});
    }

    render() {
        return (
            <div>
                <h1 className="text-center"> Home</h1>
                <h5>
                    Counter: 
                    <span>{this.state.counter}</span>
                </h5>
                <Button onClick={() => this.increment_counter()}>Increment</Button>
            </div>
        );
    }
}

export default Home;