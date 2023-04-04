import React from 'react';
import './Product.css'
const Product = (props) => {
const { name, img, seller, price, rattings } = props.product;
    return (
        <div className='product'>
    <img src={img} alt='' />
  <div className='product-info'>
  <p className='product-name'> {name}</p>
    <p> price:${price}</p>
    <p><small>seller:{seller}</small></p>
    <p><small>rattings:{rattings} stars</small></p>

  </div>
  <button className='btn-cart'>
    <p>add to cart</p>
  </button>
        </div>
    );
};

export default Product;