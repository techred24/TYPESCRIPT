// // import { Hero as SuperHero } from "./classes/Hero";
// // import  * as HeroClasses  from "./classes/Hero";
// // import { Power } from "./data/powers";
// // import poderes, { Power } from "./data/powers";
// import { Hero } from './classes/Hero';
define(["require", "exports", "../generics/generics"], function (require, exports, generics_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // printObject( 123 );
    // printObject( new Date() );
    // printObject( { a:1, b:2, c:3 } );
    // printObject( [1,2,3,4,5,6,7,8,9] );
    // printObject( 'Hola Mundo' );
    // console.log( genericFunctionArrow(3.141618).toFixed(2) );
    // console.log( genericFunctionArrow('Hola Mundo').split(' ') );
    // console.log( genericFunctionArrow(new Date()).getTime() );
    const deadpool = {
        name: 'Deadpool',
        realName: 'Wade Winston Wilson',
        dangerLevel: 130
    };
    console.log((0, generics_1.genericFunctionArrow)(deadpool).dangerLevel);
});
