import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPlaylistAdd, MdMoreHoriz } from 'react-icons/md';
import { RiShareForwardLine } from 'react-icons/ri'
import { useData } from '../../../Context/DataContextProvider'
const Player = () => {

    const { playingData } = useData()

    return (
        <div className='player'>
            {
                playingData ?
                    <Card className='playerCard bg-dark'>
                        < Card.Img variant="top" src={playingData?.snippet.thumbnails.maxres.url} />
                        <Card.Body>
                            <div>
                                <Card.Title style={{ width: '90%', fontSize: '2rem' }}>{playingData?.snippet.title}</Card.Title>
                                <div className='d-flex justify-content-between'>
                                    <p className='fs-4 pt-2'>{(Math.random() * 1000).toFixed(0)}k views</p>
                                    <p className='fs-4'>
                                        <span className='picons'><FaRegThumbsUp /></span>{(Math.random() * 1000).toFixed(2)}k &ensp;&ensp;
                                        <span className='picons'><RiShareForwardLine /></span>share &ensp;&ensp;
                                        <span className='picons'><MdPlaylistAdd /></span>save &ensp;&ensp;
                                        <span className='picons'><MdMoreHoriz /></span>
                                    </p>
                                </div>
                            </div>
                            <hr />
                            <div className="channelInfo d-flex justify-content-between">
                                <div className='d-flex p-3'>
                                    <img src={playingData?.snippet.thumbnails.medium.url} height={70} width={70} style={{ borderRadius: '50%' }} />
                                    &ensp;
                                    <span>
                                        <Card.Title style={{ fontSize: '2rem' }}>{playingData?.snippet.channelTitle}</Card.Title>
                                        <Card.Text>{(Math.random() * 100).toFixed(2)}k subscribers</Card.Text>
                                    </span>
                                </div>
                                <div className='pt-4' >
                                    <Button className='bg-danger ps-4 pe-4 fs-4 fw-bold'>SUBSCRIBE</Button>
                                </div>
                            </div>
                            <h1>Description:</h1>
                            <Card.Text>{playingData?.snippet.title}</Card.Text>
                        </Card.Body>
                    </Card >
                    :
                    <h3>loading...</h3>
            }
        </div>
    )
}

export default Player