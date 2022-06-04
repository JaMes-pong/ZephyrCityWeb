import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './component/pages/Home';
import Map from './component/pages/Map';
import Gallery from './component/pages/Gallery';
import About from './component/pages/About';
import Navbar from './component/components/navbar';

function App() {
  return (
  <BrowserRouter>
      <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/map" element={<Map />}></Route>
      <Route exact path="/gallery" element={<Gallery />}></Route>
      <Route exact path="/about" element={<About />}></Route>
      <Route exact path="/joinus" element={<Map />}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
