
let addition = (n1, n2) => {
    let result = n1 + n2;
    return result;
}

let subtraction = (n1, n2) => {
    let result = n1 - n2;
    return result;
}

let multiplication =  (n1, n2) => {
    let result = n1 * n2;
    return result;
}

let division =  (n1, n2) => {
    let result = n1 / n2;
    return result;
}

let addition_result = addition(5, 5)
let subtraction_result = subtraction(5, 5)
let multiplication_result = multiplication(5, 5)
let division_result = division(5, 5)

console.log(`Addtion: ${addition_result}`)
console.log(`Subtraction: ${subtraction_result}`)
console.log(`Multiplication: ${multiplication_result}`)
console.log(`Division: ${division_result}`)