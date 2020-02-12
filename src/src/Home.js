import React from 'react'
import Projects from './Projects';
import { motion } from "framer-motion"
import Jumbotron from './components/Jumbotron'

function Home(props) {
    return (
        <div>
            <motion.div
            initial={{opacity: 0, y: -100}}
            animate={{ opacity: 1, y: 0 }}
            transition={{duration: 1.6, ease: "easeInOut"}}>
                <h1 class="text-center my-4"> Portfolio </h1>
            </motion.div>
            <motion.div
            initial={{opacity: 0, y: -100}}
            animate={{ opacity: 1, y: 0 }}
            transition={{duration: 1.8, ease: "easeInOut", delay: 0.2}}>
                <p class="text-center">
                    Hello ! Je m'appelle Samuel. Je suis un étudiant à Epitech.
                </p>
            </motion.div>
            <Projects/>
        </div>
    )
}

export default Home;