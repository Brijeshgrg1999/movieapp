import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';

function Nowshowing() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiKey = '01b2194e0d3126278b4cd10749993496' ; 

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
      const response = await axios.get(apiUrl);
      const data = response.data.results;
      setMovies(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
     <div className="grid md:grid-cols-6 gap-5 gap-x-0 sm:grid-cols-2 justify-items-center ml-8 relative mt-[10%]" >
    {movies?( movies.map((movie)=>{
            return(
                <Card key={movie.id} movie={movie} />
            )
        }) ): ""
       
    }

    </div>
  );
}

export default Nowshowing;