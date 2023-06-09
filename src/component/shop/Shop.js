import React, { useState } from 'react';
import './Shop.css'
import { useEffect } from 'react';
import Product from '../product/Product';
const Shop = () => {
    const [products, setProducts] =useState([]);

    useEffect(()=>{
fetch('products.json')
.then(res =>res.json())
.then( data => setProducts(data))


    },[])

    return (
        <div className='shop-container'>
       <div className='products-container'>
{
    products.map(product => <Product product ={product} key={product.id}></Product>)

}

       </div>
       <div className='cart-container'>
       <h1> this is cart</h1> 
       </div>
        </div>
    );
};

export default Shop;