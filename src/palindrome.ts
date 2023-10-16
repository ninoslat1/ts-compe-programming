import inquirer from "inquirer";
import { TextChecker } from "../type.ts";

const answer = await inquirer.prompt([
    {
        type: "string",
        name: "text",
        message: "Write some text"
    }
])

const Palindrome:TextChecker = (text:string) => {
    const regex = /[\W_]/g
    const lowercaseRegexString = text.toLowerCase().replace(regex, '');
    var reverseString = lowercaseRegexString.split('').reverse().join(''); 
    reverseString === lowercaseRegexString ? console.log(true) : console.log(false);
}

const {text} = answer

text.length !== 0 ? Palindrome(text) : console.log("Please input some text")