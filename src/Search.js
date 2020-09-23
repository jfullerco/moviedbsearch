import React, { useState } from 'react'

export default function Search() {

  const [query, setQuery] = useState('');
  

  const searchMovies = async (e) => {
    e.preventDefault();
    
    const url = `https://api.themoviedb.org/3/movie?api_key=d231347f0011ef23dea4aebf91515fa3&language=en-US&query=${query}&page=1&include_adult=false`

    try {
      const res = await fetch(url);
      const data = await res.json()
      console.log(data)
    }catch(err){ 
      console.log(err) 
    }

  }

  return (
    <form className="form" onSubmit={searchMovies}>
      <label htmlFor="query" className="Label">Movie Name</label>
      <input className="input" type="text" name="query" placeholder="ie. Jurassic Park" 
      value={query} onChange={(e) => setQuery(e.target.value)} />
      <button className="button" type="submit">Submit</button>
    </form>
  )
}