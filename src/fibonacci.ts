import inquirer from "inquirer"
import { Calculate } from "../type.ts"

let i:number = 0
let x:number = 0
let y:number = 1
let z:number
let list:number[] = []

const answer = await inquirer.prompt([
    {
        type: "number",
        name: "length",
        message: "Pick a number"
    }
])

const Fibonacci:Calculate = (length:number) => {
    list.push(x)
    list.push(y)

    while(i < length) {
        z = x + y
        x = y
        y = z

        list.push(z)
        i += 1
    }
    console.log(list)
}

const {length} = answer

length !== 0 ? Fibonacci(length) : console.log("Please insert a number")

