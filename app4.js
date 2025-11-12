import fs from 'fs/promises'
import readline from 'readline-sync';

async function create(){
    try{
        let folderName = readline.question("Enter the folder name to create:");
        await fs.mkdir(folderName)
        console.log(`created folder`);
    }catch(err){
        console.log(err);
    }
}
create()