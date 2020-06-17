import React from "react";
import style from "./recipe.module.css"


export default function Recipe({title, image, name, calories, index, onDelete, ingredientLines}){
   return (
        <div className = {style.recipe}>
            <h3>title : {title}</h3>
            <p>{name}</p>
            <p>Calories: {calories}</p>
            <p>Ingredients: {ingredientLines}</p>
            <img className = {style.image} src = {image} alt="" />
            <button  type="button"  onClick={() => onDelete(index)} className="btn btn-danger">Delete</button>
        </div>
    )
}