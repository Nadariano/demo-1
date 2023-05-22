import React from 'react'
import { players } from '../shared/ListOfPlayers'
import { useState } from 'react'
export default function PlayersPresentation() {
    const [playerState, setPlayer] = useState([])
    //This is a Hook: useState: contains details of the selected player
    return (
        <div className='container'>
            {players.map((player) => (
                <div className='column'>
                    <div className='card'>
                        <img src={player.img} alt='' />
                        <h3>{player.name}</h3>
                        <p className='title'>{player.club}</p>
                        <p>
                            <button onClick={() => { setPlayer(player) }}>
                                <a href='#popup1' id='openPopUp'>Detail</a>
                            </button>
                        </p>
                    </div>
                </div>
            ))}
            <div id='popup1' className='overlay'>
                <div className='popup'>
                    <img src={playerState.img} />
                    <h2>{playerState.name}</h2>
                    <a className='close' href='#'>&times;</a>
                    <div className='content'>
                        {playerState.info}
                    </div>
                </div>
            </div>
        </div>
    )
}
