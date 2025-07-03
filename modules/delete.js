import { DBpath } from "./helper.js";
import read from "./read.js";
import { writeFile } from "fs/promises";

function deleted(id) {
    read().then(result => {
        for (let index = 0; index < result.length; index++) {
            if (result[index].id === id) {
                result.splice(index, 1);
                break;
            }
        }
        writeFile(DBpath, JSON.stringify(result, null, 2))
            .catch(console.log)
    })
}

export default deleted