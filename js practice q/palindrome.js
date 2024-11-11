// the give number is a palindrome number or not
let x = 118;
let temp = x;
rev = 0;
while (x != 0) {
    let rem = x % 10;
    rev = rev * 10 + rem;
    x = Math.floor(x / 10);
}
if (temp == rev) {
    console.log("yes it is a palindeome number ", rev);
}
else {
    console.log("not a palindrome number ",rev)
}
// let s = (temp == rev) ? `yes ${rev}` : `no ${rev}`
// console.log(s)

