#! usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter SEcond Number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operator to perform operation",
        type: "list",
        name: "Operators",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//Conditional Statement
if (answer.Operators === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.Operators === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.Operators === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.Operators === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please enter a valid operator");
}
