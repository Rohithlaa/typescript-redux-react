import { POKEMEON_LOADING, PokemonDispatchTypes, PokemonType, POKEMON_FAIL, POKEMON_SUCCESS } from "../Actions/PokemonActionTypes"

interface DefaultStateI{
    loading: boolean,
    pokemon?: PokemonType
}


const defaultstate: DefaultStateI = {
    loading : false,
}


const PokemonReducer = (state: DefaultStateI = defaultstate, action: PokemonDispatchTypes ): DefaultStateI =>{
   switch(action.type){
       case POKEMON_SUCCESS:
        return {loading: true, pokemon: action.payload }
        case POKEMON_FAIL:
            return{loading: true}
        case POKEMEON_LOADING:
            return{loading: true}   
        default: 
            return state 
   }
}


export default PokemonReducer