//conversion operation is most important
//NaN NOT A NUMBER GIVES US NUMBER 
//IF WE HAVE NUMBER AND STRING TOGETHER ITS GIVES US NaN

//EXAMPLE
//'33'= 33
//"33ABC"=NAN

let score = 56
let scorestr = String(score)
console.log(scorestr)
console.log(typeof scorestr)

let bong = "56jk"
let gong = Number(bong)
// console.log(typeof gong)
// console.log(gong)
//its give us number but real number is NaN 


//****************opration */
/**
 this is 
 */

 /*in conversion if first is string so output is string 
 and 
 if first is number so first its do opration then add strng
 ex : "2"+2 output is 22 bcoz first is string
 2+2+"2" output is 42 bcoz first its add num then add string
 */

 //assignment oprator =
 //prefix increment oprator first increase then print number
 //postfix first print number then increment the number

 //**********************data type summary*******************
 //two type 
 //1 primitive(call by value)
 /*
 string
 number
 boolean
 null //empty
 undefined// var declear but value not define
 symbol// unique value so we give symbol
 bigint// biggest value

  */




 //2 non primitive(refrence type)
 /**
  * array
  * objects
  * function
  */
 const hero=["adma","mangu","changu"]
 const man={
    name:"raja",
    age:28
 }

console.log(typeof hero);