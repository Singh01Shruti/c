let counter1 = 0;
let counter2 = 0;
let counter = 0;

setInterval(function () {
    if (counter == 60) {
        counter = 0;
    }
      

    if (counter2 >= 0 && counter2 < 12) {

        console.log(counter2.toString().padStart(2, '0') + ':' + counter1.toString().padStart(2, '0') + ':' + counter.toString().padStart(2, '0') + " A.M");
    } else {
        console.log(counter2.toString().padStart(2, '0') + ':' + counter1.toString().padStart(2, '0') + ':' + counter.toString().padStart(2, '0') + " P.M");
    }

    counter++;

    if (counter1 != 0 && counter1 % 60 == 0 ) {
        if (counter2 == 24) {
            counter2 = 0;
        }
        counter2++;
    }

    if (counter != 0 && counter % 60 === 0) {
       
        if (counter1 == 60) {
            counter1 = 0;
        }
        counter1++;
    }


}, 1000);










