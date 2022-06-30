// import { Hero as SuperHero } from "./classes/Hero";
import  * as HeroClasses  from "./classes/Hero";
// import { Power } from "./data/powers";
import poderes, { Power } from "./data/powers";


const Hero = 123;

const ironman = new HeroClasses.Hero('Ironman', 1, 55);

console.log( ironman );

console.log( poderes[0].desc );