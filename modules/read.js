import {readFile} from "fs/promises"
import { DBpath } from "./helper"

function read(){
    return readFile(DBpath, "utf-8")
    .then(data => JSON.parse(data))
    .catch(err => console.log("err"))
}

export default read