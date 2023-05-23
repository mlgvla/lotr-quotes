import CharacterList from "./components/CharacterList.js";
import { characters } from "./db.js";
import Header from "./components/Header.js";
import "./index.css"

const App = () => {
  return (
    <div>
      <Header />
      <CharacterList characters={characters} />
    </div>
  );
};

export default App;
