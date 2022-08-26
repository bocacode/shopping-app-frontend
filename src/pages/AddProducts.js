import { useState } from 'react'

const AddProducts = () => {
  const [form, setForm] = useState({})

  const handleFormSubmit = e => {
    e.preventDefault()
    fetch('http://localhost:4040/add-product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
  }

  const handleFormInput = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  console.log(form)

  return (
    <div className='container'>
      <h1>Add Product</h1>
      <form className='add-form'>
        <label htmlFor='name'>Product Name: </label>
        <input
          onChange={handleFormInput}
          type='text'
          name='name'
          id='name'
          placeholder='ex. Rice'
        />
        <label htmlFor='sku'>Sku: </label>
        <input
          onChange={handleFormInput}
          type='number'
          min={0}
          name='sku'
          id='sku'
          placeholder='ex. 234567'
        />
        <label htmlFor='description'>Description: </label>
        <input
          onChange={handleFormInput}
          type='text'
          name='description'
          id='description'
          placeholder='ex. Bowl of rice'
        />
        <label htmlFor='price'>Price:</label>
        <input
          onChange={handleFormInput}
          type='text'
          name='price'
          id='price'
          placeholder='ex. 2.34'
        />
        <label htmlFor='exp'>Exp:</label>
        <input onChange={handleFormInput} type='text' name='exp' id='exp' placeholder='ex. 2029' />
        <button onClick={handleFormSubmit}>Add Product</button>
      </form>
    </div>
  )
}

export default AddProducts
