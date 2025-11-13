import fs from "fs/promises"
import readline from "readline-sync"

async function allMethods(){
    try {
        let folderName = "test";
        let fileName = "hi.txt";
        let reNameFile = "bye.txt";
        let fileContent = "Hello CFI";

        await fs.mkdir(folderName);
        console.log(`Folder created`);

        await fs.rmdir(folderName);
        console.log(`Folder deleted`);

        await fs.writeFile(fileName, fileContent);
        console.log('file created with content');

        let output = await fs.readFile(fileName, "utf-8");
        console.log(output);

        await fs.rename(fileName,reNameFile);
        console.log(`renamed file`);

        await fs.unlink(reNameFile);
        console.log(`file deleted`);

        let final = await fs.readdir("/home/ibrahim/nodeChalk")
        console.log(final);

        await fs.appendFile(reNameFile, "\nHello hi bye")
        console.log("file updated");

    } catch (error) {
        console.log(error);
    }
}
allMethods()