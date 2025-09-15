import React, { useEffect, useState } from 'react'
import { Header } from '../Header'
import { MainBody } from '../MainBody'
export default function HomePage() {
  const [headerData , setHeaderData] = useState({})
  const [mainBodyData , setMainBodyData] = useState({})
  const [weatherData , setWeatherData] = useState({})
  // useEffect(() => {
  //   // const savedData = localStorage.getItem("weatherData");

  // //   // if (savedData && savedData !== "undefined") {
  // //   //   const parsedData = setWeatherData(JSON.parse(savedData));
  // //   //   console.log(parsedData, "parsedData");
  // //   //   const lastFetched = new Date()
  // //   // }

  //   const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  //   console.log(apiKey, "apiKey");
  //   const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=India, Rajasthan, Udaipur`;
  //   fetch(apiUrl)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setWeatherData(data);
  //       console.log(data, "weatherData");
  //       localStorage.setItem("weatherData", JSON.stringify({ data }));
  //     })
  //     .catch((error) => console.log(error));
  // }, [])

  

  useEffect(()=>{
    
    let JSONweatherData = localStorage.getItem("weatherData");
    let weatherData = JSON.parse(JSONweatherData);
    setHeaderData({
      city:weatherData.data.location.name,
      weather_des: weatherData.data.current.weather_descriptions,
      temp: weatherData.data.current.temperature,
      weatherIcon: weatherData.data.current.weather_icons,
    })
  },[])

  useEffect(()=>{
    
    let JSONweatherData = localStorage.getItem("weatherData");
    let weatherData = JSON.parse(JSONweatherData);
    setMainBodyData({
      precip:weatherData.data.current.precip,
      wind: weatherData.data.current.wind_speed,
      uv: weatherData.data.current.uv_index,
      feelslike: weatherData.data.current.feelslike,

    })
  },[])



  return (
    <div>
      <Header data = {headerData}/>
      <MainBody info = {mainBodyData}/>
    </div>
  )
}
