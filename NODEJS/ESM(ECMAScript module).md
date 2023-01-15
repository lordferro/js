greeter.js
const helloMessage = "hello!";
const goodbyeMessage = "goodbye!";

export const hello = () => helloMessage;
export const goodbye = () => goodbyeMessage;

index.js
import { hello, goodbye } from "./greeter";

console.log(hello()); // "hello!"
console.log(goodbye()); // "goodbye!"

_______________
