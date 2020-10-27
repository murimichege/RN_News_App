import axios from 'axios'

const instance = axios.create({
    baseURL :  'https://api.nytimes.com',
    headers : {
        "Content-Type": "application/xml"        
       }
       
})

export default instance