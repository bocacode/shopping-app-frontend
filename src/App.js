import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './assets/styles.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import AddProducts from './pages/AddProducts'
import SingleProduct from './pages/SingleProduct'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-products' element={<AddProducts />} />
        <Route path='/single-product' element={<SingleProduct />} />
        <Route path='*' element={<h2>Page not found</h2>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
