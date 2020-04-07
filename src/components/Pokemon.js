import React from 'react';

const Pokemon = (props) => {       //----------> recibimos la info con props a través del parametro

    return(

        <li className="pokeList__card">

            <div className="pokeList__card--image">
                <img className="pokemonImage" src={props.pokemonImage} alt="pokemon"/>
            </div>

            <div className="pokeList__card--name text__card--title">
                <p className="pokemonName">{props.pokemonName}</p>
            </div>

            <ul className="pokeList__card--types">
                {props.pokemonTypes.map((type, index)=>
                    <li className="type" key={index}>
                        {type}
                    </li>
                )}
            </ul>

        </li>
    );
}

export default Pokemon;