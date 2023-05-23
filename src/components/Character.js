import React from 'react'
import QuoteList from './QuoteList'

function Character({character, showQuotes = true}) {
    const {name, race, weapon, status, image, quotes} = character
  return (
    <div className="character">
        <img src={image} alt={`Character Portrait of ${name}`} />
        <h2>{name}</h2>
        <p>{race}</p>
        <p>{status}</p>
        <p>{weapon}</p>
        {showQuotes &&  <QuoteList quotes={quotes}/>}
       
    </div>
  )
}

export default Character

