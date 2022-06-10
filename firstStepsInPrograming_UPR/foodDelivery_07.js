function foodDelivery_07(input){

    let chikenMenu = Number (input[0]);
    let fishMenu = Number (input[1]);
    let vegMenu = Number (input[2]);

    let sumChikenMenu = chikenMenu * 10.35;
    let sumFishMenu = fishMenu * 12.40;
    let sumVegMenu = vegMenu * 8.15;

    let allSum = sumChikenMenu + sumFishMenu + sumVegMenu;
    let sumDessert = allSum * 0.20;
    let delivery = 2.50;

    let totalSum = allSum + sumDessert + delivery;

    console.log(totalSum);

    //Пилешко меню –  10.35 лв. 
//Меню с риба – 12.40 лв. 
//Вегетарианско меню  – 8.15 лв. 
} 
foodDelivery_07(["9 ",
"2 ",
"6 "])