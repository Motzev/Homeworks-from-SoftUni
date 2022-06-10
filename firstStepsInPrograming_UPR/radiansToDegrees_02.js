function radiansToDegrees_02(input){
    
    let radians = Number (input[0]);
    let degrees = Number (radians * (180 / Math.PI));

    console.log(degrees);
}

radiansToDegrees_02(["6.2832"]);