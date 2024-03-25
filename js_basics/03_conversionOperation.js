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
console.log(typeof gong)
console.log(gong)
//its give us number but real number is NaN 
