import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const SingleProduct = () => {
  const location = useLocation()
  const [product, setProduct] = useState(location.state)
  const [showForm, setShowForm] = useState(false)
  const { name, description, sku, index, _id } = location.state

  console.log(location)

  const handleDelete = e => {
    e.preventDefault()
    fetch(`http://localhost:4040/delete?id=${_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  const handleUpdate = e => {
    e.preventDefault()
    console.log('product before sending to PUT', product)
    fetch(`http://localhost:4040/update?name=${name}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
  }

  const handleForm = event => {
    setProduct({ ...product, [event.target.name]: event.target.value })
  }
  console.log(product)

  return (
    <div className='container'>
      <div className='single-product'>
        <img src={`https://source.unsplash.com/random?sig=${index}`} alt='' />
        <h1>{name}</h1>
        <h3>{description}</h3>
        <h4>{sku}</h4>
        {showForm && (
          <form className='add-form'>
            <label htmlFor='name'>Product Name: </label>
            <input
              onChange={handleForm}
              type='text'
              name='name'
              id='name'
              defaultValue={product.name}
              placeholder='ex. Rice'
            />
            <label htmlFor='sku'>Sku: </label>
            <input
              onChange={handleForm}
              type='number'
              min={0}
              name='sku'
              id='sku'
              defaultValue={product.sku}
              placeholder='ex. 234567'
            />
            <label htmlFor='description'>Description: </label>
            <input
              onChange={handleForm}
              type='text'
              name='description'
              id='description'
              defaultValue={product.description}
              placeholder='ex. Bowl of rice'
            />
            <label htmlFor='price'>Price:</label>
            <input
              onChange={handleForm}
              type='text'
              name='price'
              id='price'
              defaultValue={product.price}
              placeholder='ex. 2.34'
            />
            <label htmlFor='exp'>Exp:</label>
            <input onChange={handleForm} type='text' name='exp' id='exp' placeholder='ex. 2029' />
            <button onClick={handleUpdate}>Update Product</button>
          </form>
        )}

        <button onClick={handleDelete}>Delete</button>
        <button onClick={() => setShowForm(true)}>Update</button>
      </div>
    </div>
  )
}

export default SingleProduct
