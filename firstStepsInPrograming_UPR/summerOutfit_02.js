function summerOutfit_02(input) {

    let degrees = Number(input[0]);
    let dayTime = input[1];

    let outfit = "";
    let shose = "";

    if (dayTime === "Morning") {
        if (degrees >= 10 && degrees <= 18) {
            outfit = "Sweatshirt";
            shose = "Sneakers";
        } else if (degrees > 18 && degrees <= 24) {
            outfit = "Shirt";
            shose = "Moccasins";
        } else if (degrees >= 25) {
            outfit = "T-Shirt";
            shose = "Sandals";
        }

    } else if (dayTime === "Afternoon") {
        if (degrees >= 10 && degrees <= 18) {
            outfit = "Shirt";
            shose = "Moccasins";
        } else if (degrees > 18 && degrees <= 24) {
            outfit = "T-Shirt";
            shose = "Sandals";
        } else if (degrees >= 25) {
            outfit = "Swim Suit";
            shose = "Barefoot";
        }

    } else if (dayTime === "Evening") {
        if (degrees >= 10 && degrees <= 18) {
            outfit = "Shirt";
            shose = "Moccasins";
        } else if (degrees > 18 && degrees <= 24) {
            outfit = "Shirt";
            shose = "Moccasins";
        } else if (degrees >= 25) {
            outfit = "Shirt";
            shose = "Moccasins";
        }
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shose}.`);

}
summerOutfit_02(["28",
    "Evening"]);