//sum of digits
let a = 111;
let sum = 0;
while (a != 0) {
    let rem = a % 10;
    sum = sum + rem;
    a = Math.floor(a / 10);
}
console.log(sum)