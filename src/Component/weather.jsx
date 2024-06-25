import { useState } from "react"
import axios from "axios"


function Weather() {


      const [city,setcity] = useState("")

      const[weather,setWeather] = useState("")
      const[temp,setTempp] = useState("")
      const[desc,setDesc] = useState("")

      function handleCity(evt){

         setcity(evt.target.value)
      }

      function getWeather(){

         var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=45bc973ac09d6cca70e3e2118c652345`)

         weatherdata.then(function(Success){

            console.log(Success.data)

            setWeather(Success.data.weather[0].main)
            setDesc(Success.data.weather[0].description)
            setTempp(Success.data.main.temp)
         })
      }


   return (
      <div className="bg-black p-20">

         <div className="bg-red-200 p-10 rounded-md">

            <h1 className="text-2xl font-medium">Weather Report</h1>
            <p>I can give you a weather report about your city !!</p>
            <input onChange={handleCity} type="text" className="mt-2 border border-black rounded" placeholder="Enter city Name"></input>
            <button   onClick={getWeather}    className="bg-black text-white p-2 rounded-md mt-2">Get Report</button>

            <div className="mt-2">

               <h1><b>Weather: </b>{weather}</h1>
               <p><b>Temperature: </b>{temp}</p>
               <p><b>Description: </b>{desc}</p>

            </div>
         </div>
     </div>
   )

}


export default Weather