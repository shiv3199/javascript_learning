//this used in object 
let doom={
    username:"shivam",
    password:"high",
    welcome:function(){
        console.log(`${this.username} , welcome`)
    }
}
doom.welcome()
doom.username="shiv"
doom.welcome()
//this give us current contxt of value
console.log(this)
//this value in global empty object but in DOM its give us window

//but in function we cannot use this its gives us undefined
const chai= function(){
    console.log()
}
//arrow function
//explicit return
const chai_1 = (num1,num2)=>{
return num1+num2
}

//implicit return

const dog=(num1,num2)=> num1+num2
//one more way to declear implicit return this method helps us to return object
const dog1=(num1,num2)=> (num1+num2)
