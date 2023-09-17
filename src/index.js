import foods from "./foods";
import { Randomizer, Remover } from "./helpers";

let food = Randomizer(foods);

console.log(`I’d like one ${food}, please.`);

console.log(`Here you go: ${food}`);

console.log("Delicous! May I have another?")

let remaining = Remover(food, foods);

console.log(`I'm sorry, we're all out. We have ${remaining.length} left.`);