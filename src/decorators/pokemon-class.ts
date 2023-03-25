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

const bloquearPrototipo = function( constructor: Function) {
    Object.seal( constructor );
    Object.seal( constructor.prototype );
}

function CheckValidPokemonId() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        // console.log({ target, propertyKey, descriptor });
        const originalMethod = descriptor.value;
        descriptor.value = (id: number) => {
            if (id < 1 || id > 800) {
                return console.error('El id del pokemon debe estar entre 1 y 800');
            } else {
                originalMethod(id);
            }
        }
    }
}

function readonly( isWritable: boolean = true ): Function {
    return function(target: any, propertyKey: string) {
        // console.log({ target, propertyKey });
        const descriptor: PropertyDescriptor = {
            get() {
                // console.log(this, 'getter');
                return 'Flubber'
            },
            set(this, val) {
                // console.log(this, value, 'setter');
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    // enumerable is for avoiding to see the property in console.log
                    enumerable: false
                })
            }
        }
        return descriptor;
    }
}

@bloquearPrototipo
@printToConsoleConditional( false )
export class Pokemon {
    @readonly()
    public publicApi: string = 'https://pokeapi.co';

    constructor(
        public name: string
    ) {}

    @CheckValidPokemonId()
    savePokemonToDB(id: number) {
        console.log(`Pokemon guardado en BD ${ id }`);
    }
}