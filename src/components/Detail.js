import { useParams } from 'react-router-dom'
import { players } from '../shared/ListOfPlayers'
export default function Detail() {
    const userName = useParams();
    const player = players.find(obj => {
        return obj.id == userName.id;
    });
    let cost = player.cost.toLocaleString();

    return (
        <div class='container'>
            <h1>
                This is details of..
            </h1>
            <div className='detail-container'>
                <div className='player-card'>
                    <div className='badge'>{player.name}</div>
                    <div className='player-tumb'>
                        <img src={`../${player.img}`} alt='' />
                    </div>
                    <div className='player-info'>
                        <div className='player-top-details'>
                            <h4>{player.club}</h4>
                        </div>
                        <div className='player-price'>Market value: € {cost}</div>
                        <div className='player-bottom-details'>
                            <p>{player.info}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}