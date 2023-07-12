import React from 'react' ; 
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';

function Popular() {
    const [popular , setPopular ] = useState(null) ; 
    const apiKey = '01b2194e0d3126278b4cd10749993496' ; 

    useEffect(()=>{
        async function fetch(){
            await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`).then((res)=>{
                console.log(res.data.results) ; 
                setPopular(res.data.results) ; 
            })
        }
        fetch() ; 
    },[] )

  return (
    <div className="grid md:grid-cols-6 gap-5 gap-x-0 sm:grid-cols-2 justify-items-center ml-8 relative mt-[10%]" >
    {popular?( popular.map((movie)=>{
            return(
                <Card key={movie.id} movie={movie} />
            )
        }) ): ""
       
    }

    </div>
  )
}

export default Popular