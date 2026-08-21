// console.log("Hello from Node.JS");

// example 2
const studentName = "Rebecca"
const course = "MERN Stack"

console.log(`${studentName} is learning ${course}`); // template literals

// example 3 
const price = 5000
const quantity =  3
const total = price * quantity

console.log(`Total Price: ${total}`);


// example 4 

function calculateTotal(price, quantity) {
    return price * quantity
}

const result = calculateTotal(2000, 4)
console.log(result);