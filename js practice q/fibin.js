//fibonacc series
let a = 0
let b = 1;
let re = 5
 let i = 1;
while (i <=re) {//1,2,3,4
    let m = a + b;//1,2,3,5
    console.log(m);
    a = b;//1,1,2,3
    b = m;//1,2,3,5
    i++;
}