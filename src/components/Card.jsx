import React from 'react' ; 
import { Link } from 'react-router-dom';

import { useState } from 'react';

function Card({movie}) {
  //creating the hover effect 
  const [isHovered , setHovered ]= useState(false) ; 


  const handleMouseEnter=()=>{
    setHovered(true) ; // now it is hovering 
  }
   const handleMouseLeave =()=>{
    setHovered(false) ; 
   }
  return (

    <Link to={`/movies/${movie.id}`}>

     <div className={`relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 ${isHovered? '-translate-y-10 ease ' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
        <div className='h-2/5 mx-2'>
          <img className='object-cover h-full w-full' src={`https://image.tmdb.org/t/p/original${movie && movie.poster_path}`} />
        </div>
        {isHovered && (
          <div className='absolute bottom-0 left-0 right-0 bg-white p-4'>
            <h2 className='text-s'>{movie.title}</h2>
            <p className='text-xs'>{movie.overview}</p>
          </div>
        )}


     </div>
    </Link>
  )
}

export default Card