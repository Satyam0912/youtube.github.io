import React from 'react'
import { useData } from '../../../Context/DataContextProvider'
import VideoCard from '../../VideoCard/VideoCard'

const SuggestionContent = () => {

    const { loading, data } = useData()

    return (
        <div className='suggesionContent'>
            <div className="suggesionVideoContainer">
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
    )
}

export default SuggestionContent