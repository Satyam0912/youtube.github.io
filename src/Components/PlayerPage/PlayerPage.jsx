import React from 'react'
import Player from './Player/Player'
import SuggestionContent from './SuggestionContent/SuggestionContent'

const PlayerPage = () => {
    return (
        <div className='playerPage d-flex p-5'>
            <Player />
            <SuggestionContent />
        </div>
    )
}

export default PlayerPage

