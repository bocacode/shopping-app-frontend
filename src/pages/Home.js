import { useState, useEffect } from 'react'

import { ProductCard } from './../components/ProductCard'

const Home = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:4040/')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err))
  }, [])

  const allProducts = products.map((product, index) => (
    <ProductCard product={product} index={index} />
  ))

  return (
    <div className='container'>
      <h1>Products</h1>
      <div className='products'>{allProducts}</div>
    </div>
  )
}

export default Home
