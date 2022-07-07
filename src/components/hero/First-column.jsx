import React from 'react'
import './first-column.css';
import { motion } from 'framer-motion';

const firstColumn = () => {
  return (
           <section className="col-md-3">
                        <div className="game-title d-flex flex-column justify-content-between h-100">
                            <motion.h1 className="title1"  initial={{ x: -250}} animate={{ x: [0, 2000, 0]  }}  transition={{ type: "spring", stiffness: 100, ease: "easeIn" }} >Best art direc <br /> tion</motion.h1>
                            <p className="title-p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente,
                                minima. Similique
                                deleniti
                                ipsum, fugiat sunt quae laboriosam modi quos! Cum eaque tenetur possimus iusto nisi</p>
                        </div>
                    </section>
  )
}

export default firstColumn;