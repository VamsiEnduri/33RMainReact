import React from 'react'
import { products } from './data'
import Product from './Product'
const Products = () => {
  return (
    <div>
       {
        products.products.map((p)=>{
            return (
                <div>
                    <Product singleP={p}/>
                </div>
            )
        })
       }
    </div>
  )
}

export default Products