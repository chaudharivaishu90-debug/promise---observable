
var cl=console.log;




function add(n1:number,n2:number):number{
    return n1+n2
}

function PrintInfo():string{
    return "Hello"
}

function greet(fname:string, lname:string):string{
    return `hello ${fname} ${lname}`
}
cl(greet("vaishali" ,"chaudhari"))



//Promise<T>
async function  test():Promise<string>{
    return "Hello js"
}
test()

function printNum(num:number):Promise<number>{
    return Promise.resolve(num)
}

printNum(500)
.then(num =>{
    cl(num)
})

type userRole= "Admin" | "Superadmin" | "Buyer"

interface Iuser{
    username:string,
    token:string,
    userRole:userRole //union of type literal
}

let user1: Iuser= {
    username:"shraddha",
    token:"token",
    userRole:"Admin" 
}

let user2: Iuser= {
    username:"Pooja",
    token:"token",
    userRole:"Superadmin" 
}

let users:Array<Iuser>=[user1,user2]

function fetchUserById(id:string):Promise<Iuser>{
    return Promise.resolve(user1)
}
// fetchUserById("105")
// .then(res=>{
//     cl(res)
//    })


function fetchUser():Promise<Iuser[]>{
    return Promise.resolve(users)
}
fetchUser()
     .then (res=>{
        cl(res)
     });




export{}





