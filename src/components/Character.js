import QuoteList from "./QuoteList"

const Character = ({ character }) => {
   const { name, race, image, weapon, status, quotes } = character

   return (
      <div className="character">
         <h2>{name}</h2>
         <img src={image} alt={`Charater Portrait of ${name}`}/>
         <p>Race: {race}</p>
         <p>Status: {status}</p>
         <p>Weapon of choice: {weapon}</p>
         <QuoteList quotes={quotes} />
      </div>
   )
}

export default Character