import { DBpath } from "./helper.js";
import read from "./read.js";
import { writeFile } from "fs/promises";

function create(newRiddle) {
    read().then(result => {
        result.push(newRiddle);
        writeFile(DBpath, JSON.stringify(result, null, 2))
            .catch(console.log)
    })
}

export default create