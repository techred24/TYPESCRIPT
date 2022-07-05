// // import { Hero as SuperHero } from "./classes/Hero";
// // import  * as HeroClasses  from "./classes/Hero";
// // import { Power } from "./data/powers";
// // import poderes, { Power } from "./data/powers";
// import { Hero } from './classes/Hero';


// // const Hero = 123;

// const ironman = new Hero('Ironman', 10, 55);

// console.log( ironman.power );

// // console.log( poderes[0].desc );



/////////////////////////////////////////////////////////////////


import { printObject, genericFunction, genericFunctionArrow } from "../generics/generics";
import { Villain, Hero } from "../interfaces";

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
}

console.log( genericFunctionArrow<Villain>(deadpool).dangerLevel )