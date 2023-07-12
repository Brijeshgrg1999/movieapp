import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function SingleMovie() {
  const { id } = useParams();
  console.log('id:', id); // add debug logging
  const apiKey = '01b2194e0d3126278b4cd10749993496';
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

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
      <div className=' h-full w-1/2 mt-32 p-5 '>
        <img className='rounded-sm' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
      </div>
      <div className='mt-40 w-1/2 p-6'>
      <h1 className='text-3xl'>{movie && movie.original_title}</h1>
      <p className='text-xs text-gray-600'> {movie.tagline}</p>
        <p>
        {movie? ( 
        <>
          <span >{movie.genres[0].name}</span>
          <span className='p-3' >{movie.genres[1].name}</span>
          <span >{movie.genres[2].name}</span>
          </>
          ):""}
          </p>
       
          <p className='inline-flex gap-2'><span>  <img width="15" height="15" src="https://img.icons8.com/material-rounded/24/star--v1.png" alt="star--v1"/></span>{movie.vote_average}</p>
          <h1 className='text-4xl'>Overview</h1>
          <h3>{movie.overview}</h3>
          <p className='mt-4'>
            <span>status : {movie.status} </span>
            <span>Released Date  : {movie.release_date} </span>
            <span>Run Time : {movie.runtime} minutes</span>
          </p>

      </div>
    </>
  ) : ''}
</div>; 
}

export default SingleMovie;