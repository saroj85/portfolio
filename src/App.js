import React from 'react';
import logo from './logo.svg';
// import './App.css';
import Header from './Component/Header';
import Hero from './Component/Hero';
import PortFolio from './Component/Portfolio';



function App() {
  return (
    <div className="App">
      <Header/>
      <Hero />
      <PortFolio />
    </div>
  );
}

export default App;
