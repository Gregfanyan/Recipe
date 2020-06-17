import React, {useState, useEffect} from 'react';
import Recipe from "./Recipe";
import logo from './logo.svg';
import './App.css';

function App() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [myFilter, setFilter] = useState("chicken");


const idApi = `${process.env.REACT_APP_RECIPE_API_ID}`;
const Keys = `${process.env.REACT_APP_RECIPE_API_KEY}`;
const recipeApi1 =  `https://api.edamam.com/search?q=${myFilter}&app_id=${idApi}&app_key=${Keys}`;

  const fetchData  = () => {
  fetch(recipeApi1)
  .then(res => res.json()) 
  .then(result => setData(result.hits))
  .catch(err => console.log("error"))
  }



  useEffect(() => {
    fetchData()
  }, [myFilter])


const searching = event => {
setSearch(event.target.value)
}



const mySearch = event => {
  event.preventDefault();
  setFilter(search);
  setSearch("");
}

function deleteHandler(index){
  setData(
      data.filter((element, filterIndex) => index !== filterIndex)
  )
}

  return (
    
      <div className="App">

<form  onSubmit = {mySearch} className = "search-form">
  <input className = "search-bar" value = {search} onChange = {searching} />
    <button className ="search-button" type="submit">search</button>
</form>
<div className = "recipes">
   {data.map((element, index)=>(
      <Recipe
        onDelete={deleteHandler}
        title = {element.recipe.label} 
        image = {element.recipe.image}
        name = {element.recipe.source}
        index={index}
        key = {index} 
        calories = {element.recipe.calories}  
        ingredientLines = {element.recipe.ingredientLines[0]}
      />
    ))}  
</div>
</div>

  );
}

export default App;
