//in this we learn about functions and memory management
function say(){
    console.log("yes")
}
//say//this is function refernce
//say()//this is function execution
//we write function to do some work
//in function we have return keyword which return the value
function addNumber(num1,num2){
    return num1+num2//function run but it cannot print because we didnt command it
}
let r=addNumber(3,2)
// console.log(r)

//in function we have rest operator ... which enter value in array

//passing object in function
let user={
    name:"shivam",
    age:25
}

function handelObject(anyobject){
console.log(`${user.name}yes this `)
}
handelObject(user)