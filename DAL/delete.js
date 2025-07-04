import { DBpath } from "./helper.js";
import read from "./read.js";
import { writeFile } from "fs/promises";

async function deleted(id) {
        const riddles = await read()

        for (let index = 0; index < riddles.length; index++) {
            if (riddles[index].id === Number(id)) {
                riddles.splice(index, 1);
                break;
            }
        }
        await writeFile(DBpath, JSON.stringify(riddles, null, 2))
            .catch(console.log)
}

export default deleted