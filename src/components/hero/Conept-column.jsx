import React from 'react'
import './conept-column.css';
import CornerPicture from '../assets/img/corner-picture.png';


const ConeptColumn = () => {
  return (
           <section className="conept-arts container-fluid col-md-3">
                        <div className="d-flex justify-content-around align-items-end h-100">
                            <div className="left-side d-flex flex-column align-items-end col-md-9">
                                <h1 className="left-side-h1">conept <br /> arts </h1>
                                <img className="corner-picture" src={CornerPicture} alt=""/>
                            </div>
                            <div className="right-side d-flex flex-column justify-content-between h-100 ">
                                <div className="socials">
                                    <ul
                                        className="list-unstyled d-flex flex-column align-items-center justify-content-center">
                                        <li className="socials-a"><a href="https://www.facebook.com/">fb</a></li>
                                        <li className="socials-a"><a href="https://www.twitter.com/">tw</a></li>
                                        <li className="socials-a"><a href="https://www.instagram.com/">ig</a></li>
                                    </ul>
                                </div>
                                <div className="conept-scroll">
                                    <div className="line-text d-flex flex-row justify-content-start">
                                        <div className="m-1">scroll</div>
                                        <div className="m-1">to</div>
                                        <div className="m-1">discover</div>
                                    </div>
                                    <div className="v-line">
                                        <div className="wheel"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
  )
}

export default ConeptColumn;