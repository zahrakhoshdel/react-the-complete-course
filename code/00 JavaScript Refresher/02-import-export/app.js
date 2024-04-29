//import default export
import person from './person.js';
import prs from './person.js';

//import named export
import { baseData } from './utility';
import { clean } from './utility';
import {clean as Clean} from './utility';

//multiple named exports in a file
import * as bundled from './utility';

console.log(person.name);
console.log(prs.name);

console.log(baseData);
console.log(clean);
console.log(Clean);

console.log(bundled.baseData);
console.log(bundled.clean);