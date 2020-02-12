import React from 'react';
import Thumbnail from './Thumbnail.js';
import './App.css';
import { Col, Row } from 'react-bootstrap';
import { motion } from "framer-motion"

function Projets(props) { 
    return (
    <div>
        <motion.div
        initial={{opacity: 0, y: -100}}
        animate={{ opacity: 1, y: 0 }}
        transition={{duration: 2, ease: "easeInOut", delay: .2}}>
            <h1 className="text-center my-5">Mes Projets</h1>
        </motion.div>
        <Row>
            <Col>
                <Thumbnail
                link="https://github.com/smbss1/MUL_my_runner_2019"
                image="https://drive.google.com/uc?export=view&id=1c6-Odp2vrEZqFmENkbnc_ixAguOkfJPW"
                title="Mr Todd"
                text="Un jeu 2D mobile (Android) simple et fun"
                delay="1.2"
                ease="easeInOut"
                init={{opacity: 0, y: -50}}
                />
            </Col>
            <Col>
                <Thumbnail
                link="https://github.com/smbss1/MUL_my_runner_2019"
                image="https://images.ctfassets.net/ogo5m9ofnp6k/40fknnbF1uGQQYmW20qaqk/3d25991940ba62437626d536049a3847/Chris-Thompson_sm.png"
                title="My Runner"
                text="Un projet où l'on doit créer un runner comme Géometry Dash ou Temple Run ou Subway Surfer."
                delay="1.2"
                ease="easeInOut"
                init={{opacity: 0, y: -50}}
                />
            </Col>
            <Col>
                <Thumbnail
                link="https://github.com/smbss1/PSU_minishell1_2019"
                image="https://raw.githubusercontent.com/R4meau/minishell/master/minishell-quick-demo.gif?token=ADzLiR-sTesle5g6_4CQnHz4RFe69TgDks5ZK6oGwA%3D%3D"
                title="Minishell"
                text="Un projet où l'on doit recréer un shell Unix sans les redirections et le pipe."
                delay="1.7"
                init={{opacity: 0, y: 20}}
                />
            </Col>
            <Col>
                <Thumbnail
                link="https://github.com/smbss1/CPE_matchstick_2019"
                image="https://drive.google.com/uc?export=view&id=1bHdFner33an7j6HDZlf39_HzgzTGReHd"
                title="Matchstick"
                text="Un projet où l'on doit recréer le jeu Marienbad."
                delay="1.9"
                init={{opacity: 0, y: -50}}
                />
            </Col>
            <Col>
            <Thumbnail
                link=""
                image="https://drive.google.com/uc?export=view&id=1R2e6k_lzyp9X62QBAMF1b7qGifU3q2lF"
                title="BSQ"
                text="Un projet où l'on doit recréer le jeu Marienbad."
                delay="1.9"
                init={{opacity: 0, y: -50}}
                />
            </Col>
        </Row>
    </div>
    )
}
export default Projets;