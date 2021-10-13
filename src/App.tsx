
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { RootState } from './store';

import { PokemonAction } from './Actions/PokemonAction';
import { useState } from 'react';

function App() {
  const dispatch = useDispatch()
  const pokemonState = useSelector( (state: RootState) => state.Pokemon)
  console.log(pokemonState.pokemon)
  const [pokemonName, setPokemonName] = useState("")
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setPokemonName(event.target.value);
  const handleSubmit = () => dispatch(PokemonAction(pokemonName));
  
  return (
    <div className="App">
      <input type="text" onChange={handleChange}/>
      <button onClick={handleSubmit}>Search</button>
      {pokemonState.pokemon && (
        <div>
          <img src={pokemonState.pokemon.sprites.front_default} alt=""/>
          {pokemonState.pokemon.abilities.map(ability => {
            return <p>{ability.ability.name}</p>
          })}
        </div>
      )}
    </div>
  );
}

export default App;
