import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../App.css';
import logo from '../logo.png';
import { motion } from "framer-motion"

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">
      <img src={logo} width="30" height="30"></img>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto justify-content-center">
        <motion.div className="lol" animate={{ opacity: [0, 1] }} transition={{duration: 0.6, ease: "easeInOut"}}>
          <Nav.Link href="/">Home</Nav.Link>
        </motion.div>
        <motion.div animate={{ opacity: [0, 1] }} transition={{duration: 1, ease: "easeInOut"}}>
          <Nav.Link href="/about">Qui suis-je ?</Nav.Link>
        </motion.div>
        <motion.div animate={{ opacity: [0, 1] }} transition={{duration: 1.4, ease: "easeInOut"}}>
          <Nav.Link href="/skills">Compétences</Nav.Link>
        </motion.div>
        {/* <motion.div animate={{ opacity: [0, 1] }} transition={{duration: 1.8, ease: "easeInOut"}}>
          <Nav.Link href="/experience">Expériences professionnelles</Nav.Link>
        </motion.div> */}
        <motion.div animate={{ opacity: [0, 1] }} transition={{duration: 1.8, ease: "easeInOut"}}>
          <Nav.Link href="/projects">Projets</Nav.Link>
        </motion.div>
        <motion.div animate={{ opacity: [0, 1] }} transition={{duration: 2.2, ease: "easeInOut"}}>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </motion.div>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default NavBar;
