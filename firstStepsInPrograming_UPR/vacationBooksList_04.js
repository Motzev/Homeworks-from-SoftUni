function vacationBooksList_04(input){

    let bookPages = Number (input[0]);
    let pagesPerHour = Number (input[1]);
    let daysPerAllBook = Number (input[2]);

    let hoursPerAllBook = bookPages / pagesPerHour;
    let needHoursPerDay = hoursPerAllBook / daysPerAllBook;

    console.log(needHoursPerDay);

}
vacationBooksList_04(["432 ","15 ","4 "]);