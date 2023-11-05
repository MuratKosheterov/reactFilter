import React from 'react'

function Product({item}) {

    const {title, category, image}= item

  return (
    <div className='Product'>
      <p>{title}</p>
      <p>{category}</p>
      <img className='image' src={image} alt={title} />

    </div>
  )
}

export default Product
