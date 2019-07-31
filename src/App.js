import React from "react";
import Info from "./components/info"
import Form from "./components/form"
import Weather from "./components/weather"
const API_KEY="8291cd6db51e08f7a9d8e531ff7831b3";
class App extends React.Component{

  gettingWeather=async (e) =>{
    e.preventDefault();
    const city=e.target.elements.city.value;
    const api_url=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();
    console.log(data);
  }
  render(){
    return(
      <div>
        <Info/>
        <Form weatherMessage={this.gettingWeather} />
        <Weather/>

      </div>
    );
  }
}

export default App
