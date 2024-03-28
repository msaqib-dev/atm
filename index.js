#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000; //Dollar
let pinCode = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin",
    },
]);
if (pinAnswer.pin === pinCode) {
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            choices: ["Withdraw", "Fast Cash", "Check Balance"],
            message: "Please select an option",
        },
    ]);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter your Amount",
            },
        ]);
        let remainingBalance = (myBalance -= amountAns.amount);
        if (amountAns.amount <= myBalance) {
            console.log(amountAns.amount);
            console.log("Your remaining balance is " + remainingBalance);
            myBalance = myBalance - amountAns.amount;
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    else if (operationAns.operation === "Fast Cash") {
        let fastCash = await inquirer.prompt([{
                name: "fastAmount",
                type: "list",
                message: "Select an Amount",
                choices: ["1000", "5000", "10000", "15000", "20000"]
            }]);
        let remainingBalance = (myBalance -= fastCash.fastAmount);
        console.log(fastCash.fastAmount);
        console.log("Your remaining balance is " + remainingBalance);
    }
    else if (operationAns.operation === "Check Balance") {
        console.log("Your current balance is " + myBalance);
    }
}
else {
    console.log("Incorrect Pin");
}
