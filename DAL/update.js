import { DBpath } from "./helper.js";
import read from "./read.js";
import { writeFile } from "fs/promises";

async function update(updatedRiddle) {
    const riddles = await read()
    for (let index = 0; index < riddles.length; index++) {
        if (riddles[index].id === updatedRiddle.id) {
            const keys = Object.keys(updatedRiddle)
            for (const key of keys) {
                riddles[index][key] = updatedRiddle[key];
            }
            break;
        }
    }
    await writeFile(DBpath, JSON.stringify(riddles, null, 2))
        .catch(console.log)
}

export default update