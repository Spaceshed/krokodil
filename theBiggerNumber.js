function solve(input) {
  const firstNumber = Number(input[0]);
  const secondNumber = Number(input[1]);

  if (firstNumber > secondNumber) {
    console.log(firstNumber);
  } else {
    console.log(secondNumber);
  }
}
solve(["8", "7"]);
solve(["5", "9"]);
