import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { motion } from "framer-motion"

function Thumbnail(props) {
    return (
        <div className="project">
            <motion.div
            initial={props.init}
            animate={{ opacity: 1, y: 0 }}
            transition={{duration: 1, ease: "easeInOut", delay: props.delay}}>
                <Card className="shadow scale-anim mt-4" style={{ width: '19rem' }}>
                    <a target="_blank" href={props.link}>
                        <Card.Img variant="top" src={props.image} />
                    </a>
                    <Card.Body>
                        <Card.Title className="text-center" style={{fontWeight: 1000, fontSize: 18}}>{props.title}</Card.Title>
                        <Card.Text style={{fontSize: 13}}>{props.text}</Card.Text>
                    </Card.Body>
                </Card>
            </motion.div>
        </div>
    )
}

export default Thumbnail;