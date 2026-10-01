import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import OfficeMap from './components/OfficeMap';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<OfficeMap />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;