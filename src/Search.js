import React from 'react'

export default function Search() {

  return (
    <form className="form">
      <label htmlFor="query" className="Label">Movie Name</label>
      <input className="input" type="text" name="query" placeholder="ie. Jurassic Park" />
      <button className="button" type="submit">Submit</button>
    </form>
  )
}