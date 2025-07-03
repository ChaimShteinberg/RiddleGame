import readline from "readline/promises";
import play from './servises/play.js';
import createRiddle from "./servises/createRiddle.js"

async function menu() {

    let test = true
    while (test) {
        console.log("What do you want to do?\n" +
            "1. Play the game\n" +
            "2. Create a new riddle\n" +
            "3. Read all riddles\n" +
            "4. Update an existing riddle\n" +
            "5. Delete a riddle\n" +
            "6. View leaderboard\n" +
            "0. exit");
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout, 
            terminal: true
        })
        const choose = await rl.question("Choose 0 - 6 ")
        rl.close();

        switch (choose) {
            case "1":
                await play()
                break;
            case "2":
                await createRiddle()
                break;
            case "0":
                test = false
                break
            default:
                console.log("Wrong, Try again")
                break;
        }
    }

}

export default menu