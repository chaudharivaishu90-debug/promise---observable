
" use strict "
// var rxjs_1=require("rxjs")

var cl=console.log;
import { Observable, of } from "rxjs";

//Obervables are used to handle async operation in angular,observable is generic type

//Rxjs = reactive extension for JS, so please install Rxjs ( i rxjs)

// Observbles: continues stream of data

//Redux+Rxjs = NgRx

// creational operators:: data to observable (from,of)
// observable
// observer
// subscribe
let str="I Love ts"

let str$: Observable<string>=of(str) // obervable(string)

function fetchMsg():Observable<string>{
    return of("i love ts")
}
fetchMsg()
.subscribe({
    next:res=>{cl(res)},
    error:err=>{cl(err)}
})
// op=will return message



// example

interface IPerson{
    fname:string,
    lname:string,
    age:number

}

let person1:IPerson={
    fname:"vaishali",
    lname:"chaudhari",
    age:28


}


let person2:IPerson={
    fname:"vaishu",
    lname:"chaudhari",
    age:29


}

let personArr=[person1,person2]
function Fetchusers():Observable<IPerson[]>{
    return of(personArr)
}
Fetchusers()

.subscribe({
    next:res=>{cl(res)},
    error:err=>{cl(err)}
})

// output it will return person1 and person2 data










export{}






