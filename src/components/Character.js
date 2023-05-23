import Quote from "./Quote";

const Character = ({ character }) => {
    const { name, race, image, weapon, status, quotes } = character;

    return (
        <div className="character">
            <h2>{name}</h2>
            <img src={image}/>
            <p>Race: {race}</p>
            <p>Status: {status}</p>
            <p>Weapon of choice: {weapon}</p> 
            <Quote quotes={quotes} />
        </div>
    )
};

export default Character;