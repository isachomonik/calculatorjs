var num1 = 30;
var num2 = 10;
var operator = "x";

// Switch that determines witch operator to use
switch (operator) {
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  default:
    console.log("Operation not concluded");
}
