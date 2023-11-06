import inquirer from "inquirer";
import { TextChecker } from "../type.ts";

let i:number = 0

const selections = await inquirer.prompt([
    {
        type: "list",
        name: "selection",
        choices: ["reverse", "loop"],
        message: "Pick a number",
    }
])

const answer = await inquirer.prompt([
    {
        type: "string",
        name: "text",
        message: "Write some text"
    }
])

const ReversePalindrome:TextChecker = (text) => {
    const regex = /[\W_]/g
    const lowercaseRegexString = text.toLowerCase().replace(regex, '');
    const reverseString = lowercaseRegexString.split('').reverse().join(''); 
    reverseString === lowercaseRegexString ? console.log(true) : console.log(false);
}

const LoopPalindrome:TextChecker = (text) => {
    const regex = /[^A-za-z0-9]/g
    text = text.toLowerCase().replace(regex, "")
    let len = text.length
    for(i; i < len/2; i++){
        if(text[i] !== text[len - 1 - i]){
            console.log(false)
        }
        console.log(true)
    }
}

const {selection} = selections
const {text} = answer

if(selection === "reverse"){
    text.length !== 0 ? ReversePalindrome(text) : console.log("Please input some text")
    
}
if(selection === "loop"){
    text.length!== 0? LoopPalindrome(text) : console.log("Please input some text")
}