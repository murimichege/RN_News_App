import React, {createContext, useEffect,useState} from 'react'
import { ActivityIndicator, View } from 'react-native'
import axios from '../utils/axios'

const NewsContext = createContext()

function NewsProvider(props) {
    const [data, setData] = useState([])
    const [isLoading, setisLoading] = useState(true)
    useEffect(() => {
        const fetchData = async() => {
            const results = await axios.get('/services/xml/rss/nyt/Africa.xml')
            setData(results.data)
            setisLoading(false)
        }
        fetchData();
    },[])

    if(isLoading)
    {
        return <ActivityIndicator/>
    }
    else 

    return (
        <NewsContext.Provider
        value={{
            data,
            setData,
            isLoading,
            setisLoading

        }}>
            {props.children}
        </NewsContext.Provider>
    )
}

export {NewsProvider, NewsContext} 
