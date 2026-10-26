import React from 'react'
import Header from './components/Header/Header'
import Home from './components/home/Home'

import DataProvider from './context/DataProvider';
import Cart from './components/cart/Cart';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailView from './components/details/DetailView';

const App = () => {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 55 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailView />} />
            <Route path='/cart' element={<Cart/>} /> 
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App