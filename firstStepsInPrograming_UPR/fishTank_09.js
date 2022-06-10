function fishTank_09(input){

    let length = Number (input[0]);
    let width = Number (input[1]);
    let h = Number (input[2]);
    let percentage = Number (input[3]);

    let volume = length * width * h;
    let liters = volume / 1000;

    let totalLiters = liters - (liters * (percentage / 100));

    console.log(totalLiters);

}
fishTank_09(["105 ",
"77 ",
"89 ",
"18.5 "])