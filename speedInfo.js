function solve(input){
    const speed = Number(input[0]);

    if(speed <= 10){
        console.log("slow");
    } if (speed> 10 && speed <= 50){
        console.log("average");
    } if (speed > 50 && speed <= 150){
        console.log("fast")
    } if (speed > 150 && speed <= 1000){
        console.log("ultra fast")
    } if( speed > 1000){
        console.log("extremely fast");
    }
    
}
solve(["8"]);
solve(["49.5"]);
solve(["126"])
solve(["160"])
solve(["3500"])
