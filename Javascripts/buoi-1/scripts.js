
let sinhVien = [
    {
        id: "1",
        name: "Nguyen Van A",
        blean: false,
    },
    {
        id: "2",
        name: "Nguyen Van B",
        blean: true,
    },
    {
        id: "3",
        name: "Nguyen Van C",
        blean: true,
    },
]







let tmp = sinhVien.forEach((value, index) => {
    return value.blean == true;
})
console.log(tmp)


let tong = (a, b) => {
    return a + b;
}

let hieu = (a, b) => {
    return a - b;
}


