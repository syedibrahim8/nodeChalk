// OS module in node.js
/*
node.js comes with a built in module called os that provides information about your
computer's operating system

You don't need to install anything - just import it:
ex: import os from "os"
*/

import os from "os";
// to identify which os
console.log(os.platform());

console.log(os.arch());
console.log(os.cpus());
console.log(os.hostname());
let time = os.uptime();
console.log(`Uptime : ${time/3600} hrs`);
let memory = os.freemem()
console.log(` Free memory : ${memory}Gb`);