import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Recipes.css';

function Recipes(props) {
    const {recipe: {recipe: {label, image, calories, ingredients}}} = props
    let counter = 0;
    return (
        <div className="table">
            <p className="row text-center">{label}</p>
            <div className="recipe-image-container"><img className="recipe-image img-circle" src={image} alt="" /></div><br></br>
            <p className="calories text-center text-success">Calories: &nbsp;  {calories}</p>
            <p className="recipe font-weight-bold">Recipe:</p>
            <div className="ingredient-list-container">
                <ul className="ingredient-list">{ingredients.map(ingredient => (
                    <li key={counter++}>{ingredient.text} - {ingredient.weight}gms</li>
                ))}</ul>
            </div>
        </div>
    )
}

export default Recipes;