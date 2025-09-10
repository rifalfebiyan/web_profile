import React from 'react';
import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Home'; // Tambahkan ini
import './App.css'
import Space from './Space';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/space" element={<Space />} />
    </Routes>
  );
}

export default App;
