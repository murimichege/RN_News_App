import axios from 'axios'

const APIKEY = 'MXgFv0iccABKrdUHqwR8LpdNZMoUF7cI'
const url =' https://api.nytimes.com'

export const getBusinessNews = async()=> {
    await axios.get(`${url}/svc/topstories/v2/business.json?api-key=${APIKEY}`)    

}

export const getWorldNews = () => {
    await axios.get(`${url}/svc/topstories/v2/business.json?api-key=${APIKEY}`)    

}

export const getTechNews = () =>{
    await axios.get(`${url}/svc/topstories/v2/business.json?api-key=${APIKEY}`)    
}

export const getPoliticsNews = () => {
    await axios.get(`${url}/svc/topstories/v2/business.json?api-key=${APIKEY}`)    

}
export const getHealthNews = () => {
    await axios.get(`${url}/svc/topstories/v2/business.json?api-key=${APIKEY}`)    

}

export const getFashionNews = () => {
    await axios.get(`https://api.nytimes.com/svc/topstories/v2/business.json?api-key=${APIKEY}`)    

}