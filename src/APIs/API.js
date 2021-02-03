import axios from 'axios'

const APIKEY = 'MXgFv0iccABKrdUHqwR8LpdNZMoUF7cI'
const url =' https://api.nytimes.com'

export const getBusinessNews = async()=> {
    await axios.get(`${url}/svc/topstories/v2/business.json?api-key=${APIKEY}`)    

}

export const getWorldNews = async() => {
    await axios.get(`${url}/svc/topstories/v2/business.json?api-key=${APIKEY}`)    

}

export const getTechNews = async() =>{
    await axios.get(`${url}/svc/topstories/v2/business.json?api-key=${APIKEY}`)    
}

export const getPoliticsNews = async() => {
    await axios.get(`${url}/svc/topstories/v2/business.json?api-key=${APIKEY}`)    

}
export const getHealthNews = async() => {
    await axios.get(`${url}/svc/topstories/v2/business.json?api-key=${APIKEY}`)    

}

export const getFashionNews = async() => {
    await axios.get(`https://api.nytimes.com/svc/topstories/v2/business.json?api-key=${APIKEY}`)    

}