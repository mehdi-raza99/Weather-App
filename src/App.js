
import './App.css';
import Search from './components/Search';
import CurrentWeather from './components/CurrentWeather';
import { useState } from 'react';
import Footer from './components/Footer';
function App() {
  const [cityName,setCityName]=useState("");
  return (
    <>
    <div className="container">
      <h1>Search Real time Weather</h1>
      <Search setCityName={setCityName}/>
      {cityName && <CurrentWeather cityName={cityName}/>}
    </div>
      <Footer/>
      </>
  );
}

export default App;
