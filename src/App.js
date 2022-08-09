import React from 'react'
import Header from './container/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductListing from './container/ProductListing'
import ProductDetail from './container/ProductDetail'


const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<ProductListing />} />
          <Route exact path='/product/:productId' element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App