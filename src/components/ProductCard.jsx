import React from 'react'

const ProductCard = ({img, name, description, price, product, onAddToCart}) => {

  const addToCart = () => {

  }

  return (
    <div className='product-card'>
            <div className='product-card-img'>
                <img src={img} alt="Picture of product" />
            </div>
            <div className='product-card-text'>
                <h3>{name}</h3>
                <h4>{description}</h4>
                <p>{price}</p>
                <button onClick={() => onAddToCart(product)} >Add to cart</button>
            </div>
    </div>
  )
}

export default ProductCard