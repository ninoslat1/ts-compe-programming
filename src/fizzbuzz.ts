import inquirer from "inquirer"
import { Calculate } from "../type.ts"

let i:number = 1
let f:number = 3
let b:number = 5

const answer = await inquirer.prompt([
    {
        type: "number",
        name: "length",
        message: "Pick a number"
    }
])

const Fizzbuzz:Calculate = (length:number) => {
    for(i; i <= length; i++){
        if(i%b === 0 && i%f === 0){
            console.log("FizzBuzz")
        }
        else if(i%f === 0){
            console.log("Fizz")
        }
        else if(i%b === 0){
            console.log("Buzz")
        }
        else {
            console.log(i)
        }
    }
}

const {length} = answer

length !== 0 ? Fizzbuzz(length) : console.log("Please insert a number")

