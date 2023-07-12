import React from 'react';
import { Route, Routes } from 'react-router';
import Index from './pages/Index';

import SingleMovie from './pages/SingleMovie' ; 
import Popular from './pages/Popular';

import axios from 'axios';
import Navbar from './components/Navbar';
import "./index.css" ; 
import TrendingPage from './pages/TrendingPage';
import Nowshowing from './pages/Nowshowing';
import Tvshow from './pages/Tvshow';

function App() {
  return (
    <div>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path='/tvshow' element={<Tvshow/>} />
        <Route path="/trending" element={<TrendingPage/>} />
        <Route path="/popular" element={<Popular/>} />
        <Route path="/Nowshowing" element={<Nowshowing/>} />
        {/* <Route path='/MyLists' element={<Mylists /> } /> */}
        <Route path="/movies/:id" element={<SingleMovie />} />
      
      </Routes>
    </div>
  );
}

export default App;