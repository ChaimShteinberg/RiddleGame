import readline from "readline/promises";
import read from "../DAL/read.js";
import create from "../DAL/create.js";

async function createRiddle() {
    const newRiddle = {}
    let riddles = await read()
    if (riddles.length > 0) {
        newRiddle["id"] = riddles[riddles.length - 1].id + 1;
    } else {
        newRiddle["id"] = 0;
    }
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: true
    })
    let level
    let test = true;
    while (test) {
        level = await rl.question("enter the level: ")
        if (level === "easy" || level === "medium" || level === "hard") {
            test = false;
        } else {
            console.log("Wrong, Try again")
        }
    }
    newRiddle["level"] = level;
    newRiddle["name"] = await rl.question("enter the name for the riddle: ");
    newRiddle["taskDescription"] = await rl.question("enter the task description for the riddle: ");
    newRiddle["correctAnswer"] = await rl.question("enter the correct answer for the riddle: ");
    newRiddle["hint"] = await rl.question("enter the hint for the riddle: ");
rl.close();
create(newRiddle)
}

export default createRiddle