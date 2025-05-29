import React from "react";

const Product = (props) => {
  console.log(props);
  return <div>
    <h1>{props.singleP.title}</h1>
    <p>{props.singleP.rating}</p>
    <p>{props.singleP.dimensions.width } {props.singleP.dimensions.height}</p>
    <h1>{props.singleP.tags}</h1>
    <p>{props.singleP.reviews.map((x)=>{
        return (
            <div>
                <p>{x.comment}</p>
            <p>{x.reviewerName}</p>
            </div>
        )
    })}</p>
  </div>;
};

export default Product;
