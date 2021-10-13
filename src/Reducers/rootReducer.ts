import { combineReducers } from "redux";
import PokemonReducer from "./PokemonReducer";


const rootReducer = combineReducers({
  Pokemon : PokemonReducer
})

export default rootReducer