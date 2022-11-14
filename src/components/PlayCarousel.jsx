import React from 'react'
import castle from '../icons/castle.png';
import park from '../icons/park.png';
import art from '../icons/art.png';
import playbg from '../play-image.png'
export default function PlayCarousel() {
  return (
    <div>
       <h1 className='small-title'>Play</h1> 
        
<div className="card-carousel">

    <div className='card-play'>
        <img src={castle} alt="castle" />
        <h2>Family</h2>
    </div>

    <div className='card-play'>
        <img src={park} alt="castle" />
        <h2>Nature</h2>
    </div>

    <div className='card-play'>
        <img src={art} alt="castle" />
        <h2>Culture</h2>
    </div>

    <div className='card-play'>
        <img src={art} alt="castle" />
        <h2>Nightlife</h2>
    </div>

    <div className='card-play'>
      
        <h2>More</h2>
    </div>
</div>

    </div>

  )
}
