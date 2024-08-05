#! /usr/bin/env node
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
const res = await inquirer.prompt({
    name: "userInput",
    type: "number",
    message: "Enter the Amount of Seconds",
    validate: (input) => {
        if (isNaN(input)) {
            return "Please Enter Valid Number.";
        }
        else if (input > 60) {
            return " Seconds must be in 60";
        }
        else {
            return true;
        }
    }
});
let input = res.userInput;
console.log(input);
function startTime(val) {
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(intTime);
    setInterval((() => {
        const currentTime = new Date();
        const timeDiffernce = differenceInSeconds(intervalTime, currentTime);
        if (timeDiffernce <= 0) {
            console.log("Timer has Expired");
            process.exit();
        }
        const min = Math.floor((timeDiffernce % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDiffernce % 60);
        console.log(`${min.toString().padStart(2, "0")} : ${sec.toString().padStart(2, "0")}`);
    }), 1000);
}
;
startTime(input);
