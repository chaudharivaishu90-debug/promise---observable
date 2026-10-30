"use strict";
var cl = console.log;
function add(n1, n2) {
    return n1 + n2;
}
function PrintInfo() {
    return "Hello";
}
function greet(fname, lname) {
    return `hello ${fname} ${lname}`;
}
cl(greet("vaishali", "chaudhari"));
//Promise<T>
async function test() {
    return "Hello js";
}
test();
function printNum(num) {
    return Promise.resolve(num);
}
printNum(500)
    .then(num => {
    cl(num);
});
let user1 = {
    username: "shraddha",
    token: "token",
    userRole: "Admin"
};
let user2 = {
    username: "Pooja",
    token: "token",
    userRole: "Superadmin"
};
let users = [user1, user2];
function fetchUserById(id) {
    return Promise.resolve(user1);
}
// fetchUserById("105")
// .then(res=>{
//     cl(res)
//    })
function fetchUser() {
    return Promise.resolve(users);
}
fetchUser()
    .then(res => {
    cl(res);
});



