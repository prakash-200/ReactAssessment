import React from 'react'
import '../css/BasketballPlayerCard.css'
import chethri from '../assets/sushil.png'

function BasketballPlayerCard({ name, image, position, stats }) {
    return (
        <div className="card">

            <div className="player-card">
                <div className="card-top">
                    <img src={chethri} alt={"chethri"} className="player-image" />
                    <h2 className="player-name">{name}</h2>
                    <p className="player-position">{position}</p>
                </div>

                <div className="card-bottom">
                    
                    <div className="player-stats">
                        <center>
                        <p>Points per Game: {stats.pointsPerGame}</p>
                        <p>Assists per Game: {stats.assistsPerGame}</p>
                        <p>Rebounds per Game: {stats.reboundsPerGame}</p>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasketballPlayerCard