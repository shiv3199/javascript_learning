//array
//we learn array in array we can enter string,number,object,array
//js array is resizable
//DECLAREING ARRAY
const arr=[0,1,2,3,4,5,6]
const arr_2= new Array(12,22,33)
// console.log(arr_2)

//methods
//push,pop,unshift,shift
/*console.log(arr.push(6))
console.log(arr)
arr.pop()
console.log(arr)
//in push and pop push used for enter value in last index of array and pop used for pop out value from array
arr.unshift(8)
arr.shift()
console.log(arr)*/
//in unshift shift method enter the value in start of array but this method put lots of load on system

//questionare method in array which give us like include, inex_of
// console.log(arr.includes(5))
// console.log(arr.indexOf(5))
// in this method we ask question to and answer we get boolean value

//join
arr.join()
//join method join the two array but this method give us string type
//slice splice
//in slice method it give value of index we gave in parameter and leave the last index but cannot modified original array
console.log(arr.slice(1,4))
//but in splice method in manipulate original array 
// for ex array =[0,1,2,3,4,5,6]
//array.splice(1,4)
//result 1,2,3,4
//but modified array is [0,5,6]
console.log(arr.splice(1,4))
console.log(arr)