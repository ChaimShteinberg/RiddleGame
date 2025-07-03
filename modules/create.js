import { log } from "console";
import read from "./read.js";

function create(newRiddle) {
    read().then(result => {
        result.push(newRiddle);
        console.log(result);
        
    })
}

create({
    id: 7
})