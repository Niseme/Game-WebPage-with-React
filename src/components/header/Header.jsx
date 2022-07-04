import React from 'react'
import './header.css';
import Logo from '../assets/img/logo.png';


const Header = () => {
  return (
            <section className="container-fluid">
                <header className="container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3
            mb-4 border-bottom">
                    <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                  <img className="header-logo" src={Logo} alt="logo" />
                    </a>

                    <ul className="nav col-12 col-md-4 mb-2 justify-content-between mb-md-0" >
                        <li><a href="#" className="header-a nav-link px-2 nav-color">About</a></li>
                        <li><a href="#" className="header-a nav-link px-2 nav-color">Blog</a></li>
                        <li><a href="#" className="header-a nav-link px-2 nav-color">Gallery</a></li>
                    </ul>

                    <div className="col-md-3 text-end d-flex flex-column align-items-end">
                        <div className="border-up"></div>
                        <div className="border-down"></div>
                    </div>
                </header>
            </section>    
  )
}

export default Header