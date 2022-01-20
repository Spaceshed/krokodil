function solve(input) {
  const score = Number(input[0]);
  if (score >= 5.5) {
    console.log("Excellent!");
  } else {
    console.log("Not Exellent!");
    console.log("Good Buy!");
  }
}

solve("5.50");
solve("5.49");
solve("6.00");
solve("4");
