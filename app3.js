import chalk from 'chalk';
import readline from 'readline-sync';

console.clear();

console.log(chalk.redBright('============================'));
console.log(chalk.redBright("   Instagram Login Page"));
console.log(chalk.redBright("============================"));

let username = "sdibrahim";
let password = "987654321";

let userName = readline.question(chalk.blue("Enter your username:"))
let passWord = readline.question(chalk.yellow("Enter password:"),{ hideEchoBack: true})

console.log("checking credintials");

if(userName === username && password === passWord){
    console.log("Login Successful!");
    console.log(`Welcome back ${username}`);
}
else{
    console.log("Login Falied");
}

// console.log(object);