import readline from "readline/promises";
import read from "../DAL/read.js";
import deleted from "../DAL/delete.js"

async function deleteRiddle() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: true
    })
    const id = await rl.question("Enter the ID of the riddle you want to delete: ")
    rl.close();
    const riddles = await read()
    let test = true
    for (let index = 0; index < riddles.length; index++) {
        if (riddles[index].id === Number(id)) {
            test = false
            break;
        }
    }
    if (test) {
        console.log("id not pound. ")
        return
    }
    await deleted(id)
}

export default deleteRiddle