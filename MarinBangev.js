function solve(input) {
  let minutes = input[0];
  let seconds = input[1];
  let distance = input[2];
  let secondsFor100M = input[3];

  let delayTime = distance / 120;
  let totalDelayTime = delayTime * 2.5;
  let control = minutes * 60 + seconds;
  let marinsTime = ((distance / 100) * secondsFor100M - totalDelayTime).toFixed(3);
let slowerTime = (marinsTime - control).toFixed(3);
  if (marinsTime <= control) {
    console.log(
      `Marin Bangiev won an Olympic Quota ! His time is ${marinsTime}`
    );
  }
  if (marinsTime > control) {
    console.log(`No,Marin failed! He has ${slowerTime} seconds slower!`);
  }
}

//solve([2, 12, 1200, 10])
solve([1, 20, 1546, 12]);
