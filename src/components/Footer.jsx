import React, { Component } from 'react'
import { Container } from "react-bootstrap";

class Footer extends Component {
    state = {}
    render() {
        return (
            <Container className="text-center">
                <p>ATR Lab &copy; 2021</p>
            </Container>
        );
    }
}

export default Footer;