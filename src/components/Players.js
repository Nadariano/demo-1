// import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { players } from '../shared/ListOfPlayers'
export default function Players() {
    return (

        <div className='container' >
            {
                players.map((player) => (
                    <div className='column'>
                        <div className='card'>
                            <img src={player.img} />
                            <h3>{player.name}</h3>
                            <p className='title'>{player.club}</p>
                            <p>
                                <button><Link to={`detail/${player.id}`}>
                                    Detail
                                </Link></button>
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}