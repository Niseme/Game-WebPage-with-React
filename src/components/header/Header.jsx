import React from 'react'
import './header.css';
import Logo from '../assets/img/logo.png';
import { motion } from 'framer-motion';


const Header = () => {
  return (
            <section className="container-fluid">
                <header className="container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3
            mb-4 border-bottom">
                    <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                  <motion.img className="header-logo" initial={{ x: -250 }} animate={{ x: 0 }}  transition={{ type: "spring", stiffness: 100 }}  src={Logo} alt="logo" />
                    </a>

                    <motion.ul className="nav col-12 col-md-4 mb-2 justify-content-between mb-md-0" initial={{ x: -1000 }} animate={{ x: 0 }}  transition={{ delay: 1, type: "spring", stiffness: 100 }, { duration:2 }}  >
                        <li><a href="#" className="header-a nav-link px-2 nav-color">About</a></li>
                        <li><a href="#" className="header-a nav-link px-2 nav-color">Blog</a></li>
                        <li><a href="#" className="header-a nav-link px-2 nav-color">Gallery</a></li>
                    </motion.ul>

                    <motion.div className="col-md-3 text-end d-flex flex-column align-items-end" >
                        <motion.div className="border-up" initial={{ y: -250 }} animate={{ y: 0 }}  transition={{ delay: 0.1, type: "spring", stiffness: 200 }}></motion.div>
                        <motion.div className="border-down" initial={{ y: 250 }} animate={{ y: 0 }}  transition={{ delay: 0.1, type: "spring", stiffness: 200 }}></motion.div>
                    </motion.div>
                </header>
            </section>    
  )
}

export default Header