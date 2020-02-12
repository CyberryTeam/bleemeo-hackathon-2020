import React from 'react'
import { Container } from 'react-bootstrap';

function Contact(props) { 
    return (
        <div>
            <Container style={{backgroundColor: "#39BFFF"}}>
                <h2 className="text-center mt-5 my-5">
                    Contact
                </h2>
                <div class="form-group">
                    <label for="exampleInputEmail1">Adresse Email</label>
                    <input type="email" class="form-control" id="emailInput" placeholder="Entrer votre email"/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    <button type="submit" class="btn btn-primary">Envoyer</button>
                </div>
            </Container>
        </div>
    )
}
export default Contact;