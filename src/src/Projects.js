import React from 'react';
import Thumbnail from './Thumbnail.js';
import './App.css';
import { Col, Row } from 'react-bootstrap';
import { motion } from "framer-motion"
 
function Projects(props) {
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
            link=""
            image="https://camo.githubusercontent.com/2456796ac2e49b93aa4942c0cd9968ba6ad3f689/687474703a2f2f6e736133382e636173696d616765732e636f6d2f696d672f323031362f30352f30362f3136303530363132343430313236383934322e706e67"
            title="Minishell"
            text="Un projet où l'on doit recréer un shell Unix sans les redirections et le pipe."
            delay="1.7"
            init={{opacity: 0, y: 20}}
            />
        </Col>
        <Col>
          <Thumbnail
            link=""
            image="https://user-images.githubusercontent.com/32702872/36003463-7f347e30-0d2e-11e8-88de-8c953d2c3b98.png"
            title="Matchstick"
            text="Un projet où l'on doit recréer le jeu Marienbad."
            delay="1.9"
            init={{opacity: 0, y: -50}}
            />
        </Col>
      </Row>
    </div>
  )
}
 
export default Projects;