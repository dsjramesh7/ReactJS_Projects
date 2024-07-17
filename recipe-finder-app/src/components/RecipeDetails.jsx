import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetails = ({ recipes }) => {
  const { id } = useParams();
  const [recipeDetail,setRecipeDetail] = useState({});

  useEffect(()=>{
    const filteredDetail = recipes.find((r)=>r.id === id);
    setRecipeDetail(filteredDetail);
  },[id,recipes])
  return (
    recipeDetail && (
      <div className="recipe-details">
        <img src={recipeDetail.image} alt={recipeDetail.title} />
        <h1>{recipeDetail.title}</h1>
        <p>{recipeDetail.description}</p>
        <div>
          <h3>Steps: </h3>
          <ul>
            {
              recipeDetail.steps && recipeDetail.steps.map((eachStepPoint)=>{
                return(
                  <li key={eachStepPoint}>{eachStepPoint}</li>
                )
              })
            }
          </ul>
        </div>
        <div>
          <h3>Ingredients: </h3>
          <ul>
            {
              recipeDetail.ingredients && recipeDetail.ingredients.map((eachingredient)=>{
                return(
                  <li key={eachingredient}>{eachingredient}</li>
                )
              })
            }
          </ul>
        </div>
        <h5>Cooking Time: {recipeDetail.cookingTime}</h5>
      </div>
    )
  )
};

export default RecipeDetails;
