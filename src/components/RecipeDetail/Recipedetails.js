
import './recipedetail.css'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { fetchRecipesByName } from '../../utils/api';
import { useParams } from 'react-router-dom';
import { fetchRecipes } from '../../utils/api';
import Loading from '../Loading';
import { Link } from 'react-router-dom';

function Recipedetails() {
    const [recipes,setRecipes]=useState()
    const [loading,setLoading]=useState(true)
    const [isfavourite,setFavourite]=useState(false)
    const {name}=useParams();
    useEffect(()=>{
      
      const fetchrecipeData=async()=>{
        try{
          const data=await fetchRecipesByName(name);
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

    useEffect(() => {
      const fav = JSON.parse(localStorage.getItem('fav')) || [];
    
      if (Array.isArray(fav)) {
        const isRecipeFav = fav.some(rec => rec.meals[0].strMeal === name);
        setFavourite(isRecipeFav);
       } else {
       
         setFavourite(false);
       } 
    
    }, [name]);
    

    const handleToggleFav = () => {
      setFavourite(!isfavourite);
    
     
      const fav = JSON.parse(localStorage.getItem('fav')) || [];
    
      if (Array.isArray(fav)) {
        const updateFav = isfavourite
          ? fav.filter(rec => rec.meals[0].strMeal !== recipes.meals[0].strMeal)
          : [...fav, recipes];
    
        localStorage.setItem('fav', JSON.stringify(updateFav));
      } else {
        
        localStorage.setItem('fav', JSON.stringify([]));
      }
    };
    
   
  return (
<div className='container' >
       {
         (loading) ?<Loading />:
         (
          (
            console.log(recipes.meals[0].idMeal),
         (
            
         <div className='description'>
            <Link to='/' className='link-1'>&#x2190; Go Back</Link>
             <div className='detail' > 
             <div className="headElem">
             <h2> {recipes.meals[0].strMeal}</h2>
             <button className='fav' onClick={handleToggleFav}>{(!isfavourite)?'+ Add to favourite':'- remove from favourite'}</button>
             </div>
            <img src={recipes.meals[0].strMealThumb} className='image1'/>
            <div className="title">
               <span className='area'>{recipes.meals[0].strArea}</span> 
               <span className='category'>{recipes.meals[0].strCategory}</span> 
            </div>
            </div>

            <div className="ing">
            <h1>Ingrediants</h1>
            <ul className='ingredients'>
                <li className='ing-list'> {recipes.meals[0].strIngredient1}</li>
                <li className='ing-list'> {recipes.meals[0].strIngredient2}</li>
                <li className='ing-list'> {recipes.meals[0].strIngredient3}</li>
                <li className='ing-list'> {recipes.meals[0].strIngredient4}</li>
                
            </ul>

            <h1>Measures</h1>
            <ul className='mes'>
                <li className='mes-list'>{recipes.meals[0].strMeasure1}</li>
                <li className='mes-list'>{recipes.meals[0].strMeasure2}</li>
                <li className='mes-list'>{recipes.meals[0].strMeasure3}</li>
                <li className='mes-list'>{recipes.meals[0].strMeasure4}</li>
                
            </ul>
            </div>,
           
            <div className="instructions">
                <h1>Instructions</h1>
                 <div className="instructions">
          <p className='ins'>{recipes.meals[0].strInstructions}</p>
      </div>
            </div>

           
            
         </div>
        
      
            

           
         )
         )
            )

       }
       </div>
    
     
  )
}

export default Recipedetails
