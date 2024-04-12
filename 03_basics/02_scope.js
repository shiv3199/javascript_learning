//++++++++++++++we going to learn about scope++++++++++
let one_n="shiva"
function one(num) {
    console.log(one_n)
    console.log("shiv")
}
one()
// in this example we learn about a local variable can access global variable

//+++++++++++++++++function declaration++++++++++++
// we different method
name()
function name(){
    console.log("name")
}
/*in this we learn if we declear function directly we can call it before invocation*/ 

//2nd methd
name_two()
const name_two= function(){
    console.log("name_two")
}
/**
 * in this we learn if declear function with the help of variable
 * so if we want to invocate it before decleartion its throw error
 */