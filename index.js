import inqurirer from "inquirer";
const answer = await inqurirer.prompt([
    { message: "Enter first number", type: "message", name: "fisrtNumber" },
    { message: "Enter second number", type: "message", name: "secondNumber" },
    {
        message: "select one of the following to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.fisrtNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.fisrtNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.fisrtNumber * answer.secondNumber);
}
else if (answer.operator === "division")
    console.log(answer.fisrtNumber / answer.secondNumber);
