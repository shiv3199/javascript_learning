//string interpolation
let hero="shivam"
let uero="shivaay"
//console.log(hero+uero)//OLD method
//new method variable injecting
console.log(`hello this is ${hero} and this ${uero}`)//template literal string interpolation
//we have one more method to declear string
const gameName = new String("shivam is good man")// to use stirng we have method which helps us to manupulate string
//so it make it object we have key value pair to access the value we use [index number]
//ex console.log(gameName[0])//result "s"
//to know we have (.__proto__) we got prototype or method
console.log(gameName.length)
console.log(gameName.toUpperCase())

//try trim substring replace slice
console.log(gameName.substring(1,3))
console.log(gameName.replace("shivam","video"))
console.log(gameName.split("h"))