/**
 * Primitive Type: symbol, undefined, null, string, number
 * let, var, const
 */
// 'use strict'
let a = 2.64654156

let arr = [
    {
        name: "Nguyen Van A"
    },
    {
        name: "Nguyen Van B"
    },
    {
        name: "Nguyen Van C"
    },
]

let new_arr = arr.map((value, index) => {
    // console.log(value);
    return 1
})

let arr_filter = arr.filter((value, index) => {
    // console.log(value);

    return value.name === "Nguyen Van B"
})

let arr_find = arr.find((value, index) => {
    return value.name === "Nguyen Van B"
})

// arr_find.name = "hfjkdhfkj"
// type script

// console.log(new_arr);
// console.log(arr_filter);
// console.log({...arr_find});
// console.log(arr);


let infoUser = {
    name: "Nguyen Van A",
    age: 23
};


// {...infoUser} = {name: "Nguyen Van A", age: 23}

let b = {};
let c = {};


console.log(b === c);



