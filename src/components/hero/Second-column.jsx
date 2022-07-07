import React from 'react'
import './second-column.css';
import Axis from '../assets/img/axis.png';
import WomanPicture from '../assets/img/woman.png';
import { motion } from 'framer-motion';


const secondColumn = () => {
  return (
           <section className="col-md-6">
                <div className="game-axis-logo d-flex align-items-end h-100">
                    <motion.img className="axis" animate={{ rotate: 360 }} transition={{ duration: 2 }} src={Axis} alt="axis-logo" />
                    <div className="awards d-flex flex-column">the game awards</div>
        <motion.img className="woman" initial={{ x: 250, y: 250 }} animate={{ x: 0, y: 0  }} transition={{ type: "spring", stiffness: 100, ease: "easeIn" }} src={WomanPicture} alt="" />
                </div>
            </section>
  )
}

export default secondColumn;