import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { useEffect, useState } from 'react';
import AllProducts from './Component/AllProducts/AllProducts';

function App() {
  
  return (
    <div>
      <Navbar></Navbar>
      <AllProducts></AllProducts>
    </div>
  );
}

export default App;
