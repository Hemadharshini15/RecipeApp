import React from 'react'
import { useState } from 'react';
import './search.css'
function Searchbar({setSearchQuery}) {
    const [search,setSearch]=useState('');
    const submitButton=(e)=>{
        e.preventDefault();
        setSearchQuery(search)
        setSearch('');
        
    }
  return (
    <div className='searchBar'>
        <form onSubmit={submitButton}>
            <input 
            className='box'
            type='text'
            placeholder='Search Recipes'
            value={search}
            onChange={(e)=>{setSearch(e.target.value)}}
            />
            <button type='text' className='search-btn'>Search</button>
        </form>
      
    </div>
  )
}

export default Searchbar
