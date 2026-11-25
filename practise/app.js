
let input_1 = document.getElementById("num1")
let input_2 = document.getElementById("num2")

// console.log(input_1);
// console.log(input_2);







let addition = document.getElementById("add")


addition.addEventListener("click", function () {
    // console.log("click");      
    let inp_1 = +input_1.value
    let inp_2 = +input_2.value
    let result = inp_1 + inp_2

    console.log(result);

})


let subtraction = document.getElementById("sub")
subtraction.addEventListener("click", function () {
    let inp_1 = +input_1.value
    let inp_2 = +input_2.value
    let result = inp_1 - inp_2
    console.log(result);
})


let multiplication = document.getElementById("multi")
multiplication.addEventListener("click", function () {
    let inp_1 = +input_1.value
    let inp_2 = +input_2.value
    let result = inp_1 * inp_2
    console.log(result);
})


let division = document.getElementById("divide")
division.addEventListener("click", function () {
    let inp_1 = +input_1.value
    let inp_2 = +input_2.value
    let result = inp_1 / inp_2
    console.log(result);
})

let clear = document.getElementById("cls")
clear.addEventListener("click" , function(){
            input_1.value = " "
            input_2.value = " "
})
