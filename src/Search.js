import React, { useState } from 'react'

export default function Search() {

  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState([]);


  

  const searchMovies = async (e) => {
    e.preventDefault();
    
    const url = `https://api.themoviedb.org/3/search/movie?api_key=d231347f0011ef23dea4aebf91515fa3&language=en-US&query=${query}&page=1&include_adult=false`

    try {

      const res = await fetch(url);
      const data = await res.json()
      setMovie(data.results)

    }catch(err){ 
      console.log(err) 
    }

  }

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="Label">Movie Name</label>
        <input 
            className="input" 
            type="text" 
            name="query" 
            placeholder="ie. Jurassic Park" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
            />
        <button className="button" type="submit">Submit</button>
      </form>
      <div className="card-list">
        {movie.filter(movies => {movies.poster_path}).map(movies => (
          <div className="card" key={movies.id}>
            <img className="card--image" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movies.poster_path}`}
            alt={movies.title + ' poster'} />
        </div>
        ))}
      </div>
    </>
  )
}