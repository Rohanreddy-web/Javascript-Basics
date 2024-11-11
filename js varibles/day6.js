//Activity 1
function check(number) {
    if (number % 2 == 0) {
        console.log(`${number} is even`);
    }
    else {
        console.log(`${number} is odd`);
    }
}
check(2)
check(3)
function square(number) {
    return number ** 2
}
console.log(square(6),
    square(5));
//Activity2
function max(number1,number2) {
    if(number1>number2){
        console.log(`${number1} number1 is maximum`);
    }
    else if(number2>number1){
        console.log(`${number2}  number2 is maximum`);
    }
    else{
        console.log(`${number1} and ${number2} are equal`);
    }
  
    
}
max(60,60)
max(60,30)
max(60,80)
let strings=(string1,string2 ,string3)=>{
    return string1.concat(string3,string2)
}
console.log(strings("Rohan","reddy"," "));
//Activity3
let s=(string)=>{
    if(string.includes("@")){
     return true
    }
    else{
        return false
    }

}
console.log(s("roh@n"));
//Activity 4
function product(number,product=2) {
    return number*product
}
console.log(product(6));
function message(num,age=19) {
    return `${num }Good Morning your age is ${age}`
}
console.log(message("Rohan"));
//Activity 5
let order=()=>{
    console.log("call me");
}
function higherorder(callbackfun,number) {
        while(number!=0){
            callbackfun()
            number--
        }
}
higherorder(order,6)

