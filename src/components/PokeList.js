import React from 'react';
import Pokemon from './Pokemon';

const PokeList = (props) => { //----------> recibimos la info con props a través del parametro
    console.log('pokelist props', props);
    return(
        <ul className="pokeList">
            {props.dataList.PokemonInfo.map(pokemonObject =>
                <Pokemon
                key={pokemonObject.id}
                pokemonImage = {pokemonObject.url}
                pokemonName = {pokemonObject.name}
                pokemonTypes = {pokemonObject.types}
                />

            )
            } 
        </ul>
    );
}



export default PokeList;



/*
<Pokemon
key={pokemonObject.id}
pokemonImage = {pokemonObject.url}
pokemonName = {pokemonObject.name}
pokemonTypes = {pokemonObject.types}
/>
*/