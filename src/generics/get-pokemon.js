var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "axios"], function (require, exports, axios_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getPokemon = void 0;
    axios_1 = __importDefault(axios_1);
    const getPokemon = async (pokemonId) => {
        const { data } = await axios_1.default.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        // console.log(data);
        // console.log(data.moves[0].move.name);
        return data;
    };
    exports.getPokemon = getPokemon;
});
