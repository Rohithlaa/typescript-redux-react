
interface DefaultStateI{

}


const defaultstate: DefaultStateI = {

}


const PokemonReducer = (state: DefaultStateI = defaultstate, ): DefaultStateI =>{
   return state
}


export default PokemonReducer