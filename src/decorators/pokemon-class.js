var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Pokemon = void 0;
    function printToConsole(clase) {
        console.log(clase);
    }
    const printToConsoleConditional = (print = false) => {
        if (print) {
            return printToConsole;
        }
        else {
            return () => { };
        }
    };
    const bloquearPrototipo = function (constructor) {
        Object.seal(constructor);
        Object.seal(constructor.prototype);
    };
    let Pokemon = class Pokemon {
        constructor(name) {
            this.name = name;
            this.publicApi = 'https://pokeapi.co';
        }
        savePokemonToDB(id) {
            console.log(`Pokemon guardado en BD ${id}`);
        }
    };
    Pokemon = __decorate([
        bloquearPrototipo,
        printToConsoleConditional(false)
    ], Pokemon);
    exports.Pokemon = Pokemon;
});
