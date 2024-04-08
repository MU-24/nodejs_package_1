#! /usr/bin/env node

import inquirer from "inquirer";

let answer = await inquirer.prompt([
  {
    name: "userName",
    type: "input", 
    message: "What is your name?",
  },
]);

console.log("Welcome! " + answer.userName);
