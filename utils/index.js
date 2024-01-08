import axios from 'axios'

export const WeatherApi =async(city)=>{
    try {
        const options = {
            method: 'GET',
            url: `https://open-weather13.p.rapidapi.com/city/${city}`,
            headers: {
              'X-RapidAPI-Key': '0da537d340mshc80cdfd3774d48ep1fb564jsnbf1c0de925d6',
              'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com',
            },
          };

          const res =await axios.request(options)
          return res.data
          
    } catch (error) {
        console.log(error)
        
    }
}