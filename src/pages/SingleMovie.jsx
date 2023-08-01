import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ListContext } from '../ListContext';




function SingleMovie() {
  const { id } = useParams();
  console.log('id:', id); // add debug logging
  const apiKey = '01b2194e0d3126278b4cd10749993496';
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const {addMovieToList} = useContext(ListContext);



  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`);
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        console.error('error', error);
        setLoading(false);
      }
    }
    fetchMovieDetails();
  }, [id, apiKey]);

  const handleSaveClick=()=>{
    alert("saved sucessfully ! ")
    addMovieToList(movie) ; 
  }
  
  if (loading) {
    return <div>loading</div>;
  }

          {/* <h1>{movie.original_title}</h1>
          <p>{movie.release_date}</p>
          <p>{movie.vote_count}</p>
          <h3>{movie.overview}</h3> */}
       
  return <div className='flex max-w-full max-h-full'>
  {movie ? (
    <>
      <div className='h-full w-1/2 mt-32 p-5'>
        <img className='rounded-sm' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
      </div>
      <div className='mt-40 w-1/2 p-6'>
      <h1 className='text-3xl'>{movie && movie.original_title}</h1>
      <p className='text-xs text-gray-600 my-2'> {movie.tagline}</p>
        <div className='flex gap-4'>
        {movie? ( 
        <>
          <span className='rounded-lg border border-10 border-black p-1'>{movie.genres[0].name}</span>
          <span className='rounded-lg border border-10 border-black   p-1' >{movie.genres[1].name}</span>
          <span className='rounded-lg border border-10 border-black   p-1' >{movie.genres[2].name}</span>
          </>
          ):""}
          </div>
       
          <p className='inline-flex gap-2 mt-1'> Ratings : {movie.vote_average}</p>
          
         <div> 
         <button onClick={handleSaveClick} className='flex flex-row gap-2'>  
         

          <div>Add to List </div> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
</svg>
          </button>
         </div>

          <h1 className='text-4xl'>Overview</h1>
          <h3>{movie.overview}</h3>
         
         <div className='mt-4'>

         <div>Status : {movie.status} </div>
            <div>Released Date  : {movie.release_date} </div>
            <div>Run Time : {movie.runtime} minutes</div>
         </div>
         

      </div>
    </>
  ) : ''}
</div>; 
}

export default SingleMovie;