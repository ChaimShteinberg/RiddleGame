import {readFile} from "fs/promises"

function read(){
    return readFile("C:/Users/Chaim0533197133/OneDrive/Documents/programming/projects/RiddleGame/db/riddlesDB.txt", "utf-8")
    .then(data => JSON.parse(data))
    .catch(err => console.log("err"))
}

export default read