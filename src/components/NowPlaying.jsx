import React, { useState, useEffect, useContext } from 'react';
import { Mycontext } from '../Mycontext';
import Card from './Card';

function NowPlaying() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const contextData = useContext(Mycontext);
  const apiKey = '01b2194e0d3126278b4cd10749993496' ; 

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`);
      const json = await response.json();
      setData(json.results);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {data.map((e) => {
        return <Card key={e.id} {...e} />;
      })}
    </>
  );
}

export default NowPlaying;