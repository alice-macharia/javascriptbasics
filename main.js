import surface_area_sphere, {area_circle, volume_sphere, greet as salamu} from "./Math.js";
import greet from "./example.js";

import * as Calc from "./Math.js";


let area= area_circle(7)
console.log(`Area: ${area} and volume of sphere is ${volume_sphere(7)}`)

//node js/main.js

//default function no calibres one per file
greet()

surface_area_sphere()
salamu()

Calc.greet()