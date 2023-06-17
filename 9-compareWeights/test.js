"use strict";

//recurvasive  ----Great!!
function scaleOfTruthN(n) {
    if(n<=1){
        return 0;
    }
    let extra=0;
    let balance = Math.floor(n/3);
    let aside = balance;
    extra = n%3;
    if(extra===1) aside++;
    else if(extra===2) balance++;
    let newNum = (balance>aside)?balance:aside;
    return 1+scaleOfTruthN(newNum);
}

//circulation---- all right!!
function scaleOfTruthN_circu(n) {
    let meas = 0;
     while(n>1){
         let aside=Math.floor(n/3); //!!!floor
         let balance=aside;
         let extra = n%3;
         if(extra===1){
         aside++;
         } 
         else if(extra===2){
         balance++;
         } 
         meas++;
         n=(balance>aside)?balance:aside;
     }
     return meas;
 }
 
const ret = scaleOfTruthN(20000);
console.log(ret);
// Leave this so we can test your code:
module.exports = scaleOfTruthN;
