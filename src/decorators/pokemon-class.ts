function printToConsole( clase: Function ) {
    console.log(clase);
}

const printToConsoleConditional = ( print: boolean = false):Function => {
    if( print ) {
        return printToConsole;
    } else {
        return () => {};
    }
}

const bloquearPrototipo = function( clase: Function) {
    Object.seal( clase );
    Object.seal( clase.prototype );
}

@bloquearPrototipo
@printToConsoleConditional( false )
export class Pokemon {
    public publicApi: string = 'https://pokeapi.co';

    constructor(
        public name: string
    ) {}
}