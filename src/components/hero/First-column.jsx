import React from 'react'
import './first-column.css';

const firstColumn = () => {
  return (
           <section className="col-md-3">
                        <div className="game-title d-flex flex-column justify-content-between h-100">
                            <h1 className="title1">Best art direc <br /> tion</h1>
                            <p className="title-p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente,
                                minima. Similique
                                deleniti
                                ipsum, fugiat sunt quae laboriosam modi quos! Cum eaque tenetur possimus iusto nisi</p>
                        </div>
                    </section>
  )
}

export default firstColumn;