import React from 'react'
import { MdVerified } from 'react-icons/md'
import { useData } from '../../Context/DataContextProvider'
import VideoCard from '../VideoCard/VideoCard';

const ChannelPage = () => {

    const { channelData, loading, data } = useData()

    return (
        <div className='channelPage'>
            {
                channelData ?
                    <div className='text-center'>
                        <div className='outer'>
                            <div className="channelBackground d-flex justify-content-center flex-column align-items-center">
                                <div className="channelLogo">
                                    <img src={channelData.snippet.thumbnails.medium.url} alt="" className='channelPic' />
                                </div>
                            </div>
                        </div>
                        <h1 className=''>{channelData.snippet.channelTitle}<MdVerified /></h1>
                        <p className='fs-3'>{(Math.random() * 1000).toFixed(2)}k subscribers</p>
                        <div className="videoContainer">
                            {
                                loading ?
                                    <h1>loading...</h1>
                                    :
                                    data.map((i, index) => {
                                        return (
                                            <VideoCard
                                                key={index}
                                                vidSrc={i.snippet.thumbnails.medium.url}
                                                vidTitle={i.snippet.title.length > 55 ? i.snippet.title.substring(0, 52) + '...' : i.snippet.title}
                                                chName={i.snippet.channelTitle}
                                            />
                                        )
                                    })
                            }
                        </div>
                    </div>
                    :
                    <h1>loading...</h1>
            }
        </div>
    )
}

export default ChannelPage