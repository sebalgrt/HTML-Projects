import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main1 from './components/Main1';
import Main2 from './components/Main2';
import Footer from './components/Footer';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Routes>
            <Route exact path='/Main1' element={<Main1 />} />
            <Route exact path='/Main2' element={<Main2 />} />
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
