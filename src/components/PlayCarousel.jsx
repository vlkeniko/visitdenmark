import React from 'react'
import { NavLink } from 'react-router-dom'
// import castle from '../icons/castle.png';
// import park from '../icons/park.png';
// import art from '../icons/art.png';
// import playbg from '../play-image.png'
export default function PlayCarousel() {
  return (
    <div>
       <h1 className='small-title'>Play</h1> 
        
<div className="card-carousel">

    <NavLink to='/familytasks' className='card-play-family'>

    </NavLink>

    <NavLink to='/naturetasks'  className='card-play-nature'>
      
    </NavLink>

    <NavLink to='/culturetasks'  className='card-play-culture'>
    
    </NavLink>

    <NavLink to='/nightlifetasks'  className='card-play-nightlife'>
      
    </NavLink>

    <NavLink to='/play'>
      
        <h2>More {'>'}</h2>
    </NavLink>
</div>

    </div>

  )
}
