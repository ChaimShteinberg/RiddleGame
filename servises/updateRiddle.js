import readline from "readline/promises";
import read from "../DAL/read.js";
import update from "../DAL/update.js";

async function updateRiddle() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: true
    })
    const id = await rl.question("Enter the ID of the riddle you want to change: ")
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
    test = true
        const riddle = {}
        riddle["id"] = Number(id);
    while (test) {
        console.log("Select the value you want to change: \n" +
            "1. level \n" +
            "2. name \n" +
            "3. taskDescription\n" +
            "4. correctAnswer \n" +
            "5. hint"
        )
        const key = await rl.question("select: (1 - 5)")
        const value = await rl.question("Enter the change: ")

        switch (key) {
            case "1":
                riddle["level"] = value;
                break;
            case "2":
                riddle["name"] = value;
                break;
            case "3":
                riddle["taskDescription"] = value;
                break;
            case "4":
                riddle["correctAnswer"] = value;
                break;
            case "5":
                riddle["hint"] = value;
                break;
        }
        const loop = await rl.question("Do you want to replace another value? (y/n)")
        switch (loop) {
            case "y":
                break;
            case "n":
                test = false
                break;
        }
    }
    rl.close()
    await update(riddle)
}

export default updateRiddle