// import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { players } from '../shared/ListOfPlayers'
import { Icon, CardTitle, Row, Col, Card, Container } from 'react-materialize'
export default function Players() {
    return (

        <Container style={{ marginTop: '2%' }}>
            <Row>
                {
                    players.map((player) => (
                        <Col s={12} m={6} l={4}>
                            <Card
                                closeIcon={<Icon>close</Icon>}
                                header={<CardTitle image={player.img} reveal waves="light" />}
                                reveal={<p><h4>{player.club}</h4>{player.info}</p>}
                                revealIcon={<Icon>more_vert</Icon>}
                                title={player.name}
                            >
                                <Link to={`detail/${player.id}`}>
                                    Detail
                                </Link>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>

    )
}