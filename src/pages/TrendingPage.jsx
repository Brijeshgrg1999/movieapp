import React from 'react' ; 
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import { RingLoader } from 'react-spinners';
function TrendingPage() {
    const [trending , setTrending ] = useState(null) ; 
    const apiKey = '01b2194e0d3126278b4cd10749993496' ; 
    const [loading , setLoading ] = useState(true) ; 

    useEffect(()=>{
        async function fetch(){
            await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`).then((res)=>{
                console.log(res.data.results) ; 
                setTrending(res.data.results) ; 
                setLoading(false) ; 
            })
        }
        fetch() ; 
    },[] )

    if(loading)
    {
        return (
            <div className='sweet-loading'>
            <RingLoader
              color={'#123abc'} 
              loading={loading} 
            />
          </div>
        )
    }

  return (
    <div className="grid md:grid-cols-6 gap-5 gap-x-0 sm:grid-cols-2 justify-items-center ml-8 relative mt-[10%]" >
    {trending?( trending.map((movie)=>{
            return(
                <Card key={movie.id} movie={movie} />
            )
        }) ): ""
       
    }

    </div>
  )
}

export default TrendingPage 