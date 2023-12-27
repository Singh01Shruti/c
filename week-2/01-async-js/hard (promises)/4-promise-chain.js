/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond(n1) {
    const p = new Promise (function (resolve) {
        setTimeout( function () {
            resolve();
        }, n1*1000)
    });
    return p;
}

function waitTwoSecond(n2) {
    const p = new Promise (function (resolve) {
        setTimeout( function () {
            resolve();
        }, n2*1000)
    });
    return p;
}

function waitThreeSecond(n3) {
    const p = new Promise (function (resolve) {
        setTimeout( function () {
            resolve();
        }, n3*1000)
    });
    return p;
}

 function calculateTime(t1,t2,t3) {
    const start = Date.now();
      return waitOneSecond(t1).then(() => {
        return waitTwoSecond(t2);
    }).then(() => {
       return waitThreeSecond(t3);
    }).then(() => {
        return Date.now()-start;
    });  
}

module.exports = calculateTime;
