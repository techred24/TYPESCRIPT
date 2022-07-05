// import { getPokemon } from "./generics/get-pokemon";

// getPokemon(4)
//     .then(pokemon => console.log(pokemon.sprites.front_default))
//     .catch(error => console.log(error))
//     .finally(() => console.log('Fin'));

////////////////////////////////////

import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon('Charmander');

(Pokemon.prototype as any).customName = 'Pikachu';

console.log(charmander);