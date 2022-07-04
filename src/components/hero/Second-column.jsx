import React from 'react'
import './second-column.css';
import Axis from '../assets/img/axis.png';
import WomanPicture from '../assets/img/woman.png';

const secondColumn = () => {
  return (
           <section className="col-md-6">
                <div className="game-axis-logo d-flex align-items-end h-100">
                    <img className="axis" src={Axis} alt="axis-logo" />
                    <div className="awards d-flex flex-column">the game awards</div>
                    <img className="woman" src={WomanPicture} alt="" />
                </div>
            </section>
  )
}

export default secondColumn;