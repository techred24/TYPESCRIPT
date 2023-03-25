// import { getPokemon } from "./generics/get-pokemon";
define(["require", "exports", "./decorators/pokemon-class"], function (require, exports, pokemon_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const charmander = new pokemon_class_1.Pokemon('Charmander');
    // (Pokemon.prototype as any).customName = 'Pikachu';
    console.log(charmander.savePokemonToDB(24));
});
