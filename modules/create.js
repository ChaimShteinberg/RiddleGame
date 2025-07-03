import read from "./read.js";
import {writeFile} from "fs/promises";

function create(newRiddle) {
    read().then(result => {
        result.push(newRiddle); 
        writeFile("C:/Users/Chaim0533197133/OneDrive/Documents/programming/projects/RiddleGame/db/riddlesDB.txt", JSON.stringify(result, null, 2))    
        .catch(console.log) 
    })
}

export default create