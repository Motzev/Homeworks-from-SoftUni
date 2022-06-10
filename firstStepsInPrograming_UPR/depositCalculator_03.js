function depositCalculator_03(input){

    let depositSum = Number (input[0]);
    let mounts = Number (input[1]);
    let percentage = Number (input[2]);

    let interest = depositSum * percentage / 100;
    let sumPerMount = interest / 12;
    let totalSum = depositSum + (mounts * sumPerMount);

    console.log(totalSum);

}
depositCalculator_03(["2350","6 ","7 "]);