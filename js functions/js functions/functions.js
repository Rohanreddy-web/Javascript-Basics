
{
  let q;
  function sum(a, b, d = 6, p = 0) {
    q=106
    return a + b + d + p
  }
  console.log(sum(10, 30, 80), q);
  console.log(sum(10, 60, 80));
}
function n(){
  let a=10
  return function il(){
    console.log(a)

   }
}
x=n()
x()



// In your code, d has a default value of 6, but p doesn't have a default value. When you call the sum function with sum(10, 30, 80), 80 is assigned to d because it's the third argument, and p becomes undefined because there's no fourth argument passed. This will result in a NaN (Not a Number) error when trying to add p to the sum.
//count is important in passing a parameters
// const func = (x) => {
//     return x
// }
// console.log(func(60))
// console.log(func)
let fun2 = (name) => {
  return `${name} reddy`;
};
console.log(fun2("Rohan"));
function names(d) {
  return d("sai");
}
console.log(names(fun2));
// 1. `fun2` is defined as an arrow function that takes a parameter `name` and returns `name + " " + "reddy"`. Essentially, it concatenates the provided `name` with the string `"reddy"`.

//     ```javascript
//     let fun2 = (name) => {
//       return name + " " + "reddy";
//     };
//     ```

// 2. `console.log(fun2("Rohan"));` calls the `fun2` function with the argument `"Rohan"`. This results in `"Rohan reddy"`, which is logged to the console.

// 3. Then, there's a function `names` defined which takes another function `d` as a parameter.

//     ```javascript
//     function names(d) {
//         console.log(d("sai"));
//     }
//     ```

// 4. Inside `names`, `d("sai")` is called. Here, `d` is the `fun2` function that was passed as an argument. So, effectively, it's like calling `fun2("sai")`.

// 5. `fun2` is then called with the argument `"sai"`. Following the logic of `fun2`, it concatenates `"sai"` with `"reddy"`, resulting in `"sai reddy"`.

// 6. The result of `d("sai")`, which is `"sai reddy"`, is then logged to the console by the `names` function.

// So, when you run `names(fun2);`, it first logs `"Rohan reddy"` (from the `console.log(fun2("Rohan"));` line), and then logs `"sai reddy"` (from the `console.log(d("sai"));` line within the `names` function).
// let w = function name(n) {//named function
//   //namrd functions
//   if (n <= 0) {
//     return "bjcszd";
//   }
//   return name(n - 1);
// };
// console.log(w(5));
