function solve(input) {
  const numberX = Number(input[0]);

  if (numberX % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

solve(["3"]);
solve(["2"]);
solve(["5"]);
solve(["6"]);
