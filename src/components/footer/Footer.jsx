import React from 'react'
import './footer.css';
// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
           <div className="container-fluid">
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                        <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                          <i className="fa fa-gamepad ftaw" aria-hidden="true"></i>
                          
                        </a>
                        <span className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
                    </div>
                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><a href="https://www.linkedin.com/in/nijole-semele-7392718a/" className="text-decoration-none ftaw">
                          <FontAwesomeIcon icon={faLinkedin} /> </a></li>
                        <li className="ms-3"><a href="https://github.com/niseme" className="text-decoration-none ftaw">
                          <FontAwesomeIcon icon={faGithub} /> </a></li>
                        <li className="ms-3"><a href="https://facebook.com/" className="text-decoration-none ftaw"><FontAwesomeIcon icon={faFacebook} /></a></li>
                    </ul>
                </footer>
            </div>
        </div> 
  )
}

export default Footer