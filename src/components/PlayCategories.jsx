import React from 'react'
import { NavLink } from 'react-router-dom'

export default function PlayCategories() {
  return (
    <div className='play-categories'>
        <NavLink className='play-category-family' to="/playfamily">
            <h1 className='card-play-title'>Family</h1>
        </NavLink>
        <NavLink className='play-category-nightlife' to="/playnightlife">
            <h1 className='card-play-title'>Nightlife</h1>
        </NavLink>
        <NavLink className='play-category-culture' to="/playculture">
            <h1 className='card-play-title'>Culture</h1>
        </NavLink>
        <NavLink className='play-category-nature' to="/playnature">
            <h1 className='card-play-title'>Nature</h1>
        </NavLink>
    </div>
  )
}
