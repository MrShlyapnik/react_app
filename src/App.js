import React from "react";
import Info from "./components/info"
import Form from "./components/form"
import Weather from "./components/weather"
class App extends React.Component{
  const API_KEY="8291cd6db51e08f7a9d8e531ff7831b3"
  gettingWeather=async () =>{
    const api_url=await fetch(`https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`)
  }
  render(){
    return(
      <div>
        <Info/>
        <Form/>
        <Weather/>

      </div>
    );
  }
}

export default App
