import React from "react";
import Info from "./components/info"
import Form from "./components/form"
import Weather from "./components/weather"
const API_KEY="8291cd6db51e08f7a9d8e531ff7831b3";
class App extends React.Component{
  state={
    temp: undefined,
    city:undefined,
    country:undefined,
    pressure: undefined,
    sunset: undefined,
    error:undefined
  }
  gettingWeather=async (e) =>{
    e.preventDefault();
    const city=e.target.elements.city.value;
    if(city){
    const api_url=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();

    var sunset=data.sys.sunset;
    var date=new Date();
    date.setTime(sunset);
    var sunset_date=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();

    this.setState({
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      pressure: data.main.pressure,
      sunset: sunset_date,
      error: undefined
    });
  }
  else{
    this.setState({
      temp: undefined,
      city:undefined,
      country:undefined,
      pressure: undefined,
      sunset: undefined,
      error: "Введите город"
    });
  }
  }
  render(){
    return(
      <div>
        <Info/>
        <Form weatherMessage={this.gettingWeather} />
        <Weather
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          pressure={this.state.pressure}
          sunset={this.state.sunset}
          error={this.state.error}
        />

      </div>
    );
  }
}

export default App
