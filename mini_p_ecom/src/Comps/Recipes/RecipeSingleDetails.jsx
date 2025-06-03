import React from "react";
import { recipes } from "./data";
import { useParams } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
const RecipeSingleDetails = () => {
  // console.log(useParams(),"usePrams")
  const params = useParams();
  // console.log(params,"params")

  const matchedRecipe = recipes.recipes.find((x) => x.id === Number(params.id));
  console.log(matchedRecipe, "matchedRecipe");


  const handleCartItems = (xyz) => {
    alert("helo addtocart clicked");
    const allCartItemsFromLS=JSON.parse(localStorage.getItem("cartItems")) || []
    allCartItemsFromLS.push(xyz)
    localStorage.setItem("cartItems",JSON.stringify(allCartItemsFromLS))
  };

  const handleFavItems=(xyz)=>{
    alert("saved to saved items")
     const allFavItemsFromLS=JSON.parse(localStorage.getItem("favItems")) || []
    allFavItemsFromLS.push(xyz)
    localStorage.setItem("favItems",JSON.stringify(allFavItemsFromLS))
  }
  return (
    <div>
      <h1>{params.id}</h1>
      {matchedRecipe !== undefined ? (
        <div style={{ display: "flex" }}>
          <img src={matchedRecipe.image} width={500} />
          <div>
            <button onClick={()=>handleCartItems(matchedRecipe)}>
              AddToCart <IoCartOutline />
            </button>
            <button onClick={()=>handleFavItems(matchedRecipe)}>
              AddToFavs <FaHeart />
            </button>
            <p>{matchedRecipe.name}</p>
            <h2>ingredients</h2>
            <ol>
              {matchedRecipe.ingredients.map((x) => {
                return (
                  <>
                    <li>{x}</li>
                  </>
                );
              })}
            </ol>
            <h2>instructions</h2>
            <ol>
              {matchedRecipe.instructions.map((x) => {
                return (
                  <>
                    <li>{x}</li>
                  </>
                );
              })}
            </ol>
          </div>
        </div>
      ) : (
        "no recipe found with that id"
      )}
    </div>
  );
};

export default RecipeSingleDetails;
