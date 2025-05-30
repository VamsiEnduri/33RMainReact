import React from 'react'
import { recipes } from './data'
import { useParams } from 'react-router-dom'
const RecipeSingleDetails = () => {
    // console.log(useParams(),"usePrams")
    const params=useParams()
    // console.log(params,"params")

    const matchedRecipe=recipes.recipes.find((x)=>x.id === Number(params.id))
    console.log(matchedRecipe,"matchedRecipe")
  return (
    <div>
        <h1>{params.id}</h1>
       {matchedRecipe !== undefined ?  <div>
            <img src={matchedRecipe.image} width={500}/>
            <p>{matchedRecipe.name}</p>
            <h2>ingredients</h2>
            <ol>
                {matchedRecipe.ingredients.map((x)=>{
                    return (
                        <>
                        <li>{x}</li>
                        </>
                    )
                })}
            </ol>
<h2>instructions</h2>
               <ol>
                {matchedRecipe.instructions.map((x)=>{
                    return (
                        <>
                        <li>{x}</li>
                        </>
                    )
                })}
            </ol>
        </div> :"no recipe found with that id"}
    </div>
  )
}

export default RecipeSingleDetails