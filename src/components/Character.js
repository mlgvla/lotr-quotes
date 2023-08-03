import React, { useState } from "react"
import QuoteList from "./QuoteList"

const Character = ({ character }) => {
   const { name, race, weapon, status, image, quotes } = character

   const [showQuotes, setShowQuotes] = useState(true)

   function handleClick() {
      setShowQuotes(showQuotes => !showQuotes)
   }

   return (
      <div className="character">
         <img
            src={image}
            alt={`Character Portrait of ${name}`}
            onClick={handleClick}
         />
         <h2>{name}</h2>
         <p>{race}</p>
         <p>{status}</p>
         <p>{weapon}</p>

         {showQuotes ? <QuoteList quotes={quotes} /> : null}
      </div>
   )
}

export default Character
