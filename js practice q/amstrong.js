//Amstrong number
let a = 153;
let temp = a;
let sum = 0;
while (a != 0) {
  let rem = a % 10;//2 5.0
  sum = sum + rem * rem * rem;//2+0+8=10
  a = Math.floor(a / 10);//15,1
}
let result = (temp == sum) ? "yes Amstrong number" : "no";
console.log(result);
