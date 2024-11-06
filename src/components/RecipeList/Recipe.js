import React from 'react'
import './recipe.css'
import {Link} from 'react-router-dom'
export default function Recipe({recipes}) {
  return (
    <div className='card'>
      { 
      recipes && recipes.meals&&recipes.meals.map((res,index)=> 
      (
        <Link  key={index} to  ={`recipe/${res.strMeal}`}className='link'>        
          <div className="con"> 
            <h2> <span>{res.strMeal}</span></h2>
            <img src={res.strMealThumb} className='image'/>
            <div className="title">
               <span className='area'>{res.strArea}</span> 
               <span className='category'>{res.strCategory}</span> 
            </div>
            </div>
            </Link>   
      
      
      )
      )}
    </div>
  )
}
