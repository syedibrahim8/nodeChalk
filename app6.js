import fs from 'fs/promises'
import readline from 'readline-sync';

async function del(){
    try {
        let folderName = readline.question("Enter the folder name wants to delete:")
        await fs.rmdir(folderName)
        console.log(`folder deleted`);
    } catch (error) {
        console.log(error);
    }
}
del()