import React from 'react'
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Popular from "./Popular"
import TrendingPage from './TrendingPage';
import Nowshowing from './Nowshowing';


function Index() {
  const apiKey = '01b2194e0d3126278b4cd10749993496' ; 
    const [movies , setMovie ] = useState() ; 
    const[loading , setLoading ] = useState(false) ; 
    const [ check , setCheck ] = useState("") ; 
    const buttonRef = useRef(null) ; 


    useEffect(()=>{
      async function fetch(){
        await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=1`).then(
          (res)=>{
            console.log(res.data.results);
            setMovie(res.data.results) ; 
            setLoading(true) 
          }
        )
        }
        fetch() ; 
      }, [])

      useEffect(() => {
        if (buttonRef.current !== null) {
          buttonRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, [check]);

      function setValue(data)
      {
        setCheck(data) ; 
      }

  if(!loading){
    return (
      <div>loading </div>
    )
  }


  return (
    <div className='bg-white'>
    <div className='mt-0 h-40vh'>
  <Carousel className='h-40vh'
    showThumbs={false} 
    autoPlay={true}
    transitionTime={3} 
    infiniteLoop={true} 
    showStatus={false}>
    {movies.map((movie) => {
      return (
        <>
         <div className="h-96 relative">
              <img 
                className="w-full h-full object-cover"
                src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} 
                alt={movie ? movie.original_title: ""} 
              />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-10">
          <div className="font-bold text-4xl mb-4 text-white">{movie ? movie.original_title: ""}</div>
          <div className="text-2xl mb-2 text-white">
            {movie ? movie.release_date : ""}
            <span className="ml-6">{movie ? movie.vote_average :""}<i className="fas fa-star ml-1" /></span>
          </div>
          <div className="italic text-sm   text-white ">{movie ? movie.overview : ""}</div>
        </div>
</div>
        </>
      )
    })}
  </Carousel>
</div>
      <div className='mt-9'>
        <div className='flex justify-center gap-3 '>
          <button onClick={()=>{setValue('popular')}}>Popular</button>
          <button onClick={()=>{setValue('trending')}}>Trending</button>
          <button onClick={()=>{setValue('Nowshowing')}}>Now Showing</button>
        </div>
      </div>
      <div className='m-5 ' ref={buttonRef}>
       {check ===""? <Popular/> : ""}
       {check==='popular' ? <Popular/> :'' }
       {check==='trending' ? <TrendingPage/> :'' }
       {check==='Nowshowing' ? <Nowshowing/> :'' }

      </div>
     
    
      </div>
  )
}

export default Index