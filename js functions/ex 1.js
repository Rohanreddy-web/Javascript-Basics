/*Faulty Calculater
1.it takes two numbers as input from the user.
2.it performs wrong operations as follow
+ ---> -
* ---> +
- ---> /
/ ---> **
3.it performs only 10% wrong calculations.
*/
let Calculater = (a, b) => {
  if (a < 0. && b < 0.1) {
    console.log("wrong");
    console.log(a - b);
    console.log(a * b);
    console.log(a / b);
    console.log(a ** b);
  } else {
    console.log("right");
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
  }
};
function result(input) {
  let c = Math.random();
  let d = Math.random();
console.log( input(c, d))
}
result(Calculater);
