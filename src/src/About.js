import React from 'react'
import { Row, Col } from 'react-bootstrap';
import logo from './logo.png'

function About(props) {
    return (
        <div>
            <h1 className="text-center my-5">Qui suis-je ?</h1>
            <Row>
                <Col>
                    <img className="ml-5" src={logo} width="70px" height="70px"/>
                </Col>
                <Col>
                    <div className="text-center -5">
                        Salut ! Je m'appelle Samuel. Développeur ...
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default About;