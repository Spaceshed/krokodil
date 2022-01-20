function solve(input) {
  let excursionPrice = Number(input[0]);
  let puzzles = Number(input[1]);
  let talkingDolls = Number(input[2]);
  let teddyBears = Number(input[3]);
  let minions = Number(input[4]);
  let trucks = Number(input[5]);

  let totalToys = puzzles + talkingDolls + teddyBears + minions + trucks;
  let money =puzzles * 2.6 +talkingDolls * 3 +teddyBears * 4.1 +minions * 8.2 +trucks * 2;

  if(totalToys>= 50) {
      money = money * 0.75;
  }

  money = money * 0.90;
  let diff = Math.abs(money-excursionPrice);
  if(money >= excursionPrice) {
      console.log(`Yes! ${diff.toFixed(2)} lv left.`)
  } else {
      console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
  }
}


solve(["40.8", "20", "25", "30", "50", "10"]);
solve(["320", "8", "2", "5", "5", "1"]);
