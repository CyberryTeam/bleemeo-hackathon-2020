import React from 'react';
import { Jumbotron as Jumbo, Container, Button, Row, Col } from 'react-bootstrap';
import boatImage from '../background.jpg';

function Jumbotron(props) {
    return (
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1 className="text-center my-4">Welcome</h1>
                <p className="text-center">Learn to code</p>
                <div class="text-center">
                    <Button>Salut</Button>
                </div>
            </Container>
        </Jumbo>
    )
}

export default Jumbotron;