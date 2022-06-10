function basketballEquipment_08(input){

    let moneyPerYear = Number (input[0]);

    let shoes = moneyPerYear - (moneyPerYear * 0.40);
    let clothes = shoes - (shoes * 0.20);
    let ball = clothes / 4;
    let acsesoars = ball / 5;

    let totalSum = moneyPerYear + shoes + clothes + ball + acsesoars;

    console.log(totalSum)

    /*Баскетболни кецове – цената им е 40% по-малка от таксата за една година
Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка*/
}
basketballEquipment_08(["550"])