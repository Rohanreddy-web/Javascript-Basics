
//TODO: Task 1
for(let i=1;i<=10;i++){
    console.log(i);
}
for(let i=1;i<11;i++){
    let answer=5*i
    console.log(`5 x ${i}=${answer}`);
}
//TODO: Task 2
let i=0
let total=0
while(i<=10){
    total+=i
    i++
}
console.log(total)
a=10
while(a!=0){
    console.log(a);
    a--
}
//TODO: Task 3
let b = 1
do {
    console.log(b);
    b++
} while (b <= 5)
fact = 1
c = 1
do {
    fact *= c
    c++
} while (c <= 5)
console.log(fact);
//TODO: Task 4
for (let index = 1; index <= 5; index++) {
    let n = ""
    for (let index2 = 1; index2 <= index; index2++) {
        n += "*"
    }
    console.log(n);
}
d = 1
while (d <= 10) {
    if (d == 5) {
        d++
        continue
    }
    console.log(d);

    d++
}
let e=1
while (e <= 10) {
    if (e == 7) {

        break
    }
    console.log(e);

    e++
}

