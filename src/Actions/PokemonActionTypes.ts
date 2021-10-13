export const POKEMEON_LOADING = "POKEMON_LOADING"

export const POKEMON_SUCCESS = "POKEMON_SUCCESS"

export const POKEMON_FAIL = "POKEMON_FAIL"

export type PokemonType = {
    abilities: PokemonAbiliy[],
    sprites: PokemonSprites,
    stats: PokemonStats[]
}

export type PokemonAbiliy = {
    ability : {
        name: string
        url: string
    }
}

export type PokemonSprites = {
    front_default : string
}

export type PokemonStats = {
    base_stat : number
    stat: {
        name: string
    }
}

export interface PokemonLoading{
    type: typeof POKEMEON_LOADING
}

export interface PokemonFail{
    type: typeof POKEMON_FAIL
}

export interface PokemonSuccess{
    type: typeof POKEMON_SUCCESS,
    payload:  any
}


export type PokemonDispatchTypes = PokemonLoading | PokemonFail | PokemonSuccess