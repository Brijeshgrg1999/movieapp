import React, { useContext, useEffect } from "react";
import { ListContext } from "../ListContext";
import Card from "../components/Card";


function Mylists() {
  const {savedMovies ,setSavedMovies } = useContext(ListContext) ; 
  console.log("movies" , savedMovies ) ; 

  useEffect(() => {
    localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
  }, [savedMovies]);
  
  useEffect(() => {
    const storedMovies = localStorage.getItem("savedMovies");
    if (storedMovies) {
      setSavedMovies(JSON.parse(storedMovies));
    }
  }, []);

  if(!savedMovies)
  {
    return (
      <div>loading..</div>
    )
  }

  return (
    <div>
      <h1 className="text-center">Saved Movies</h1>
      <div className="grid md:grid-cols-6 gap-5 gap-x-0 sm:grid-cols-2 justify-items-center ml-8 relative mt-[10%]" >
        {savedMovies?(savedMovies.map((movie) => <Card key={movie.id} movie={movie} />
        )):""}
      </div>
    </div>
  );
}

export default Mylists;