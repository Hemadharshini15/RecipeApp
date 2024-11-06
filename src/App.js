import Loading from "./components/Loading";
import { fetchRecipes } from "./utils/api";
import Recipe from "./components/RecipeList/Recipe";
import { fetchRecipesByName } from "./utils/api";
import { useEffect, useState } from "react";
import Header from './components/Header/Header'
import { Link } from "react-router-dom";

function App() {
  const [recipes,setRecipes]=useState()
  const [loading,setLoading]=useState(true)
  const [searchQuery,setSearchQuery]=useState()

  const [speRecipe,setspeRecipe]=useState();

  const [check,setCheck]=useState(false);
  useEffect(()=>{
    const fetchrecipeData=async()=>{
      try{
        const data=await fetchRecipes();
   console.log(data)
        setRecipes(data);
        setLoading(false)
      }
      catch(error){
        setLoading(false)
      }
     
     
    }
    fetchrecipeData();
  },[])
 

  useEffect(()=>{
    const fetchrecipeData=async()=>{
      try{
        const data=await fetchRecipesByName(searchQuery);
   console.log(data)
        setspeRecipe(data)
        setLoading(false)
      }
      catch(error){
        setLoading(false)
      }
     
     
    };
    if (searchQuery) {
      fetchrecipeData();
      setCheck(true);
    }
  },[searchQuery])
 
  
  
  
 
  return (
    
    <div className="App">
    <Header name={"Recipe App"} setSearchQuery={setSearchQuery}/>
    {check ? (
        loading ? (
          <Loading />
        ) : (
          <div>
            {console.log(speRecipe)}
        
              <Recipe recipes={speRecipe} />
            
          </div>
        )
      ) : (
        loading ? (
          <Loading />
        ) : (
          <Recipe recipes={recipes} />
        )
      )}
  </div>
  )
}

export default App;
