// Reverse a given number 168 to 861
let num = 146;
let rev=0;
while (num != 0) {
    let rem = num % 10;
     rev = rev * 10 + rem;
    num = Math.floor(num / 10);
}
console.log(rev);