import React from 'react'
import './headStyle.css'
import { useState } from 'react';
import Searchbar from '../SearchBar/Searchbar'
import myImage from '../th.jpeg'
function Header({name='My App',setSearchQuery}) {
  return (
    <div className='Header'>
        <div className="title"><img className='my-logo' src={myImage}/></div>
        <div className="serachbar" ><Searchbar setSearchQuery={setSearchQuery}/></div>
      
    </div>
  )
}

export default Header
