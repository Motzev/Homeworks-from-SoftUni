function suppliesForSchool(input){
    
    let numPen = Number (input[0]);
    let numMarkers = Number (input[1]);
    let cleaningDetergent = Number (input[2]);
    let percentage = Number (input[3]);

    let sumPen = numPen * 5.80;
    let sumMarkers = numMarkers * 7.20;
    let sumCleaningDetergent = cleaningDetergent * 1.20;

    let sum = sumPen + sumMarkers + sumCleaningDetergent;
    let totalSum = sum - (sum * (percentage / 100));

    console.log(totalSum);

   // Пакет химикали - 5.80 лв. 
//Пакет маркери - 7.20 лв. 
//Препарат - 1.20 лв (за литър)

}
suppliesForSchool(["4 ","2 ","5 ","13 "]);