import dotenv from "dotenv";
dotenv.config();

let fname = process.env.Name;
let age = process.env.Age;
let city = process.env.City;

console.log(fname, age, city);