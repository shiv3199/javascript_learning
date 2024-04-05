//singleton
//object.create

//object literal
const jsuser={
    name:"shvam",
    age:14
}
//access javascript object
//jsuser.name
//jsuser["name"]//most prefer
console.log(jsuser["name"])
//to access symbol we use []
jsuser["age"]=24
console.log(jsuser["age"])

//to freeze object then we cannot change object
//assign object assign {} so this is target because obj element store in this 

//we can access object key 
// object.keys(object_name) and datatype is array
// console.log(Object.keys(jsuser))
// console.log(Object.values(jsuser))


//destructuring
const kota={
    name:"radhe",
    village:"gokul",
    friend:"krishna"
}

//if we want to use or access the o/bject value we use 
// object_name.key but we have one more way

const{name:n}=kota
console.log(n)
//this called destructure


//API

//what is API
//this is json and it is javascript object 
//{

// }

