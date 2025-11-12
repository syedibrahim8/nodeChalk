import chalk from 'chalk';
import readline from 'readline-sync';

console.log(chalk.blue("Welcome to the Simple JS App"));
let fname = readline.question(chalk.green("What is your name?: "));
let age = readline.questionInt(chalk.yellow("How old are you?:"));
let code = readline.question(chalk.blue("Do you like coding?[y/n]:"))

console.log(chalk.magenta("---Summary---"));
console.log(`Name : ${fname}`);
console.log(`Age : ${age}`);
if(code == "y" || code == "Y"){
    console.log(`Likes : Yes`);
}else{
    console.log(`Likes : No`);
}