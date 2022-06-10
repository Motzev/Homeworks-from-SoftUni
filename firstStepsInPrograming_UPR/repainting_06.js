function repainting_06(input) {

    let nylon = Number (input[0]);
    let paint = Number (input[1]);
    let paintThinner = Number (input[2]);
    let hourMaster = Number (input[3]);

    let nylon1 = nylon + 2;
    let paint1 = paint + (paint * 0.10);
    
    let sumNylon = nylon1 * 1.50;
    let sumPaint = paint1 * 14.50;
    let sumPaintThinner = paintThinner * 5.00;
    let bag = 0.40;

    let sum = sumNylon + sumPaint + sumPaintThinner + bag;
    let sumMasterPerHour = sum * 0.30;

    let totalSumPerMaster = sumMasterPerHour * hourMaster;

    let totalSum = sum + totalSumPerMaster;

    console.log(totalSum)

    //Предпазен найлон - 1.50 лв. за кв. метър
    //Боя - 14.50 лв. за литър
    //Разредител за боя - 5.00 лв. за литър

}
repainting_06(["5 ","10 ","10 ","1 "])