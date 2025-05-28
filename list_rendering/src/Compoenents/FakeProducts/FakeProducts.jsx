import React from 'react'
import data from './fakeData'
import "./FakeProducts.css"
const FakeProducts = () => {
console.log(data)
  return (
    <div className='fake_productsComp'>
        <h1>fakeProducts</h1>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(350px,1fr))",gap:"20px"}} className='fake_products_container'>
            {data.map((product,index)=>{
                   return (
                    <div style={{border:"1px solid black",marginBottom:"20px"}} id='productCard'>
                        <img src={product.image} id='img'/>
                        <p>{product.title}</p>
                        <span>{product.price}</span>
                    </div>
                   )
            })}
        </div>
    </div>
  )
}

export default FakeProducts