
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
      <Search setCityName={setCityName}/>
      {cityName && <CurrentWeather cityName={cityName}/>}
    </div>
      <Footer/>
      </>
  );
}

export default App;
