import React, { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({})
    const [playingData, setPlayingData] = useState(null)
    const [channelData, setChannelData] = useState(null)

    const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/search',
        params: {
            relatedToVideoId: '7ghhRHRP6t4',
            part: 'id,snippet',
            type: 'video',
            maxResults: '50'
        },
        headers: {
            'X-RapidAPI-Key': '0a2a9f463amsh80fee1f9314fcd3p1f0eb3jsncb6df7b4c54e',
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };

    useEffect(() => {
        axios.request(options).then(function (response) {
            setData(response.data.items)
            setLoading(false)
            console.log(response.data.items)
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    useEffect(() => {
        setPlayingData(data[0])
        setChannelData(data[0])
    }, [data])

    const values = {
        loading,
        setLoading,
        data,
        setData,
        playingData,
        setPlayingData,
        channelData,
        setChannelData
    }

    return (
        <DataContext.Provider value={values}>{children}</DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext);