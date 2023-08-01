import React, { createContext, useState } from "react";

export const ListContext = createContext();

function ListContextProvider({children}) {
  const [savedMovies, setSavedMovies] = useState([]);

  const addMovieToList = (movie) => {
    setSavedMovies([...savedMovies, movie]);
  };

  return (
    <ListContext.Provider value={{ savedMovies, addMovieToList  , setSavedMovies}}>
      {children}
    </ListContext.Provider>
  );
}

export default ListContextProvider ; 