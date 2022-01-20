function solve(input) {
  let x = Number(input[0]);

  if (x < 100) {
    console.log("Less than 100");
  }
  if (x >= 100 && x <= 200) {
    console.log("Between 100 and 200");
  }
  if (x > 200) console.log("Greater than 200");
}

solve(["95"]);
solve(["120"]);
solve(["210"]);
