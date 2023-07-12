import { useState } from 'react';
import debounce from 'lodash.debounce';
import { Link } from 'react-router-dom';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const apiKey = '01b2194e0d3126278b4cd10749993496' ; 
 



  const handleInputChange = (event) => {
  
    const value = event.target.value ; 
    setQuery(value);
    if (value === '') {
      setResults([]);
    } else {
      debouncedSearch(value);
    }
    
  };

 

  const handleSearch = async () => {
    // Make a request to your backend API to fetch search results based on query
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`);
    const data = await response.json();
    setResults(data.results) ; 
  };
  const debouncedSearch = debounce(handleSearch , 300 ) ; 


  return (
    <div className='flex gap-3'>
      <input type="text" value={query} onChange={handleInputChange}  className='rounded-lg'/>
      <button className='mt-1' onClick={handleSearch}>Search</button>
     {query && ( <SearchResults results={results} />)}
    </div>
  );
}

function SearchResults({ results }) {
  return (
  
           <ul className='search-result  bg-white absolute z-10 w-1/2' >
      {results.map((result) => (
        // <li key={result.id}>{result.title}</li>
       <div className='p-1'>
         <Link to={`movies/${result.id }`}>{result.title}</Link>
       </div>
      ))}
    </ul>
   
  );
}