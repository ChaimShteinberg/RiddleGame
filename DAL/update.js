import { DBpath } from "./helper.js";
import read from "./read.js";
import { writeFile } from "fs/promises";

function update(updatedRiddle) {
    read().then(result => {
        for (let index = 0; index < result.length; index++) {
            if (result[index].id === updatedRiddle.id) {
                const keys = Object.keys(updatedRiddle)
                for (const key of keys) {
                    result[index][key] = updatedRiddle[key];
                }
                break;
            }
        }
        writeFile(DBpath, JSON.stringify(result, null, 2))
            .catch(console.log)
    })
}

export default update