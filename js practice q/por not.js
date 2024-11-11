let x = 5;
let count = 0;
for (let i = 1; i <= 10; i++){
    if (x % i == 0) {
        count = count + 1;
    }
}
 if (count == 2) {
   console.log(x ,"is prime number");
 } else {
   console.log("no");
 }

