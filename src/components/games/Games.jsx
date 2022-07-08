import React from 'react'
import './games.css';

const gameMenu = [
  {
    id: 1,
    title: "Racing game",
    category: "car game",
    price: 15.99,
    link: 'https://niseme.github.io/17-car-racing/',
    desc: `Easy Racing game made with JS for learning process`,
  },
  {
    id: 2,
    title: "Dice game",
    category: "dice",
    price: 13.99,
    link: "https://niseme.github.io/Pig-game/",
    desc: `Easy dice game made with JS for learning process`,
  },
  {
    id: 3,
    title: "Guess the member",
    category: "guess",
    price: 1.99,
    link: "https://niseme.github.io/WORD-GAME/",
    desc: `Easy guess game made with JS for learning process`,
  },
];

const Games = () => {
  return (
            <section className=".container-fluid game-choise pt-5 pb-5">
            <div className="container">
                <div className="row">
                  <div className="games d-flex justify-content-around">
                      {
                          gameMenu.map(({ id, title, link }) => {
                              return (
                                  <button key={id} className="btn btn-primary btn-lg col-md-3 p-5">
                                      <a href={link}>{title}</a>
                                  </button>
                              )
                          }
                          )
                      }
                    </div>
                </div>
            </div>
        </section>  
  )
}

export default Games


