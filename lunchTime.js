function solve(input) {
  let TVShowName = input[0];
  let timeForEpisode = Number(input[1]);
  let fullBreak = Number(input[2]);

  let lunchTime = fullBreak / 8;
  let restTime = fullBreak / 4;

  let freeTime = fullBreak - (lunchTime + restTime);

  if ( freeTime>=timeForEpisode){
      let difference= freeTime - timeForEpisode;
      
    
      console.log(`You have enough time to watch ${TVShowName} and left with ${Math.ceil(difference)} minutes free time.`)
  }  else {
    let difference=timeForEpisode - freeTime;
  
    console.log(`You don't have enough time to watch ${TVShowName}, you need ${(Math.ceil(difference))} more minutes.`)
  }
  
}
solve(["Game of Thrones", "60", "96"]);
solve(["Teen Wolf",
"48",
"60"])
