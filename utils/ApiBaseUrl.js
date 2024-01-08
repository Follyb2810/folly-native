import axios from 'axios'


const ApiBaseUrl = axios.create({
    baseURL:'https://abino-folly.vercel.app/api/v1/'
})

export default ApiBaseUrl