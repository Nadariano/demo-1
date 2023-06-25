import { useParams } from 'react-router-dom'
import { players } from '../shared/ListOfPlayers'
import { Container, Card, Icon, CardTitle } from 'react-materialize'
import { useState } from 'react';
import ModalCase from './ModalCase';
export default function Detail() {
    const userName = useParams();
    const player = players.find(obj => {
        return obj.id == userName.id;
    });
    let cost = player.cost.toLocaleString();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Container style={{ marginTop: '2%' }}>
            <Card className="detail">
                <CardTitle image={`../${player.img}`}>{player.name}</CardTitle>
                <div className="detail-top">
                    <a onClick={() => setIsOpen(true)} className="btn-floating right waves-effect waves-light red">
                        <Icon>ondemand_video</Icon>
                    </a>
                </div>

                <div className="detail-bot">
                    <p className='top-info'>
                        {player.club}
                    </p>
                    <p className='mid-info'>
                        Market value: € {cost}
                    </p>
                    <p className='bot-info'>
                        {player.info}
                    </p>
                </div>
                {isOpen && <ModalCase setIsOpen={setIsOpen} player={player} />}

            </Card>
        </Container >

    )
}