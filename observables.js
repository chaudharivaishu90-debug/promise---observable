


var cl = console.log;
// import { of } from "rxjs";
//Obervables are used to handle async operation in angular
//Rxjs = reactive extension for JS, so please install Rxjs ( i rxjs)
// Observbles: continues stream of data
//Redux+Rxjs = NgRx
let str = "I Love JS";
let str$ = of(str); // obervable(string)
str$
    .subscribe({
    next: res => {
        cl(res);
    },
    error: err => {
        cl(err);
    }
});
