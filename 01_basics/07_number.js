//we multiple method in number but less than string
const number=500
const num= new Number(101.8)
// console.log(num.toPrecision(3))

//+++++++++++++++++maths+++++++++++++
//comes with maths library which helps us 
//we have multiple number 
/**
 * .abs
 * round
 * ceil
 * floor
 * min
 * max
 * random
 */
console.log(Math.random())//math random give us value between 0 to 1
console.log(Math.floor(Math.random()*10)+1);//math.floor()give us lowest value and to avoid 0 result we add 1
// now we have concept of min max
const min= 10
const max=20

console.log(Math.floor(Math.random()*(max-min+1)+min))//this formula give us random number min to max number