import React from 'react'

const VideoCard = ({ vidSrc, vidTitle, chName }) => {
    return (
        <div className='videoCard'>
            <img src={vidSrc} alt='' />
            <span style={{height:'50px'}}><p>{vidTitle}</p></span>
            <h4>{chName}</h4>
        </div>
    )
}

export default VideoCard