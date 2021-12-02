import React, {useState, useEffect} from "react";
import Recipes from "./components/Recipes/Recipes";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";

function App() {

  const APP_ID = "13d8f3f1";
  const APP_KEY = "35e606847f40d098d1f58c1f7b0a655a";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('veg pizza');

  const exampleUrl = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  useEffect(()=>{
    getRecipe();
  }, [query])

  const getRecipe = async () => {
    const data = await fetch(exampleUrl)
      .then(res => res.json());
      setRecipes(data.hits);
      setSearch("");
    console.log('data', data);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="App">
      <div class="container">
      <span className="App-header text-white text-center" >Food Recipe Plaza🍕</span>
      <span className="inputForm text-center">
      <form className="searchForm" onSubmit={getSearch}>
        <input type="text" placeholder="What are you looking for?" className="search-bar form-group" value={search} onChange={updateSearch}/>
        <button type="submit" className="search-button btn-basic">Search Recipes</button>
      </form>
      </span>
      </div>
      <span className="recipeForm">
      {recipes.map(recipe => (
        <Recipes key={recipe.recipe.uri} recipe={recipe}/>
      ))}
      </span><br></br>
      <p className="enjoy text-white">Enjoy Delicious😋 food at home!</p>
    </div>
  )
}

export default App;
