import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

const useFetch = (initialCity) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Using useCallback to memoize the function and prevent unnecessary re-renders
  const fetchData = useCallback(async (city) => {
    setLoading(true);
      //! open weather
    const options = {
      method: 'GET',
      url: 'https://openweather43.p.rapidapi.com/weather',
      params: {
        q: city,
        appid: [
          'da0f9c8d90bde7e619c3ec47766a42f4',
          'da0f9c8d90bde7e619c3ec47766a42f4'
        ],
        units: 'standard'
      },
      headers: {
        'X-RapidAPI-Key': '0da537d340mshc80cdfd3774d48ep1fb564jsnbf1c0de925d6',
        'X-RapidAPI-Host': 'openweather43.p.rapidapi.com'
      }
    };

    try {
        const response = await axios.request(options);
        setData(response?.data);
        setError(null); // Clear error if the request is successful
      } catch (error) {
        setData(null); // Clear data on error
        setError('Invalid city. Please enter a valid city name.',error.message);
      }
  
      setLoading(false);
  }, []);

  // useEffect to trigger the initial API call
  useEffect(() => {
    fetchData(initialCity);
  }, [fetchData, initialCity]);

  // refetch function to manually trigger a new API call
  const refetch = useCallback(() => {
    fetchData(initialCity);
  }, [fetchData, initialCity]);

  return { data, loading, error, refetch };
};

export default useFetch;


//!yahoo weather 
// const options = {
//   method: 'GET',
//   url: 'https://yahoo-weather5.p.rapidapi.com/weather',
//   params: {
//     location: city,
//     format: 'json',
//     u: 'f',
//   },
//   headers: {
//     'X-RapidAPI-Key': '0da537d340mshc80cdfd3774d48ep1fb564jsnbf1c0de925d6',
//     'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com',
//   },
// };
     //! iopen weather
    //   const options = {
    //     method: 'GET',
    //     url: `https://open-weather13.p.rapidapi.com/city/${city}`,
    //     headers: {
    //       'X-RapidAPI-Key': '0da537d340mshc80cdfd3774d48ep1fb564jsnbf1c0de925d6',
    //       'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com',
    //     },
    //   };