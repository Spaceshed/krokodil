function solve(input) {
  const dayOfWeek = input[0];

  if (dayOfWeek === "Monday") {
    console.log("Go to work today");
  } else if (dayOfWeek === "Tuesday") {
    console.log("Go to work and then to the gym");
  } else if (dayOfWeek === "Wednesday") {
    console.log("Go to work and then to the mall");
  } else if (dayOfWeek === "Thursday") {
    console.log("Go to work the go to home and make diner");
  } else if (dayOfWeek === "Friday") {
    console.log("Go to work then go to the bar");
  } else if (dayOfWeek === "Saturday") {
    console.log("Go and sleep all day");
  } else if (dayOfWeek === "Sunday") {
    console.log("Sleep and day until morning");
  }
}

solve(["Monday"]);
solve(["Tuesday"]);
solve(["Wednesday"]);
solve(["Thursday"]);
solve(["Friday"]);
solve(["Saturday"]);
solve(["Sunday"]);
