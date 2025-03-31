let user_input = window.prompt("Enter a number:");
console.log("Before conversion:", user_input, typeof user_input);

let converted_number= Number(user_input);
console.log("After conversion:", converted_number, typeof converted_number);

let result= converted_number * 2;
if (!isNaN(converted_number)) {
    document.querySelector("#output").textContent = `Your number multiplied by 2 is: ${result}`;
} else {
    document.querySelector("#output").textContent = "Invalid input! Please enter a number.";
}