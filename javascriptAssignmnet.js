
//                                                               Programming Hero                                                             // 

// ================================================================ Assignment 4 =========================================================== //








// problem 1 --------------------------------------------------- radian to degrees--------------------------------------------------------

function radianToDegree(radianValue) {

    if (typeof radianValue === 'number') {
        const degreeValue = radianValue * 57.2958;
        return parseFloat(degreeValue.toFixed(2));
    }
    else {
        console.log("(problem 1)=================== Enter valid radian value by using numbers ")
    };


};

//console.log(radianToDegree(199));




// problem 2 --------------------------------------------------- Find if it's a JS file --------------------------------------------------------


function isJavaScriptFile(file) {

    if (typeof file === 'string') {


        const lastThreeLetters = file.slice(-3,)
        if (lastThreeLetters === ".js") {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        console.log("(problem 2)=================== Enter a string value and don't forget to use a dot JS (.js) ")
    };


};

//console.log(isJavaScriptFile("sami.js"));



// problem 3 --------------------------------------------------- Calculating total price of oil --------------------------------------------------------



function oilPrice(diesel, petrol, octane) {

    if (typeof diesel === 'number' && typeof petrol === 'number' && typeof octane === 'number') {


        const dieselPrice = 114;
        const petrolPrice = 130;
        const octanePrice = 135

        const totalPrice = (diesel * dieselPrice) + (petrol * petrolPrice) + (octane * octanePrice);
        return totalPrice;

    }
    else {
        console.log("(problem 3)=================== Enter 3 integer numbers here that are going to be considered as the amount of diesel, petrol, and octane ")
    };


};

// console.log(oilPrice(0, 2, 3));




// problem 4 --------------------------------------------------- Calculating total price of oil --------------------------------------------------------


function publicBusFare(people) {



    if (typeof people === 'number') {

        const remainingAfterBus = people % 50;

        if (remainingAfterBus !== 0) {
            const remainingAfterCar = remainingAfterBus % 11;

            if (remainingAfterCar !== 0) {
                const totalPublicTicketPrice = remainingAfterCar * 250;
                return totalPublicTicketPrice;
            }
            else {
                const totalPublicTicketPrice = remainingAfterBus * 250;
                return totalPublicTicketPrice;
            }
        }
        else {

            return 0;
        }


    }
    else {
        console.log("(problem 3)=================== Enter 1 integer number that will be considered as total number of travelers ")
    };


};

// console.log(publicBusFare(365));



// problem 5 --------------------------------------------------- Identifying if they are friends --------------------------------------------------------

//var friends = //{ name: "abul", friend: "babul" },  // { name: "kabul", friend: "abul" }    // { name: "joe", friend: "alex" }
//var friends2 = // { name: "babul", friend: "abul" }  // { name: "kabul", friend: "sabul" }   // { name: "john", friend: "doe" }


function isBestFriend(property1, property2) {


    if (typeof property1 === 'object' && typeof property2 === 'object') {


        if (property1.name === property2.friend && property1.friend === property2.name) { return true; }
        else { return false; }

    }
    else {
        console.log("(problem 3)=================== Enter 2 objects ============= {object1}, {object2} ========== that will have 2 properties named 'name' and 'friend'")
    };


};

// console.log(isBestFriend({ name: "abul", friend: "babul" }, { name: "babul", friend: "abul" }));

