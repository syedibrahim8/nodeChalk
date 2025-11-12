// make file()

import fs from "fs/promises";
import readline from "readline-sync";

async function makefile(){
    try {
        let fileName = readline.question("Enter file name:");
        let fileContent = readline.question("Enter content:");
        await fs.writeFile(fileName,fileContent)
        console.log(`created ${fileName} with content`);
    } catch (error) {
        console.log(error);
    }
}
makefile()