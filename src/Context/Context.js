import React, {createContext, useEffect,useState} from 'react'
import { ActivityIndicator, View } from 'react-native'
import axios from '../utils/axios'

const NewsContext = createContext()

function NewsProvider(props) {
    const [data, setData] = useState([])
    const [isLoading, setisLoading] = useState(true)
    useEffect(() => {
      const interval = setInterval(() => {
        const fetchData = async() => {
            const results = await axios.get('/v2/top-headlines?country=us&apiKey=d2a6eb707bc3445a904cacc7e950fc2e')
                
            setData(results.data)
            setisLoading(false)
        }
        fetchData();
      },10000)
            
       
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
