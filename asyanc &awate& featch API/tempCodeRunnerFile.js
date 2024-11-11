//Activity 1,2
const book = {
    "title": "The Day in the sun",
    "auther": "xyz",
    "year": 1994//update year to 2004
}

// console.log(book);
const x = {
    "data1": book.auther.toUpperCase(),
    "data2": book.title,//log 's 1994
    "datt3": book.year,
    "datafun": book.function = function add(year) {
        return book.year = year
    }
}
x.datafun(2004)
console.log(book);
console.log(x);
//Activity 3
let lib = {
    "names": ["om", "sai", "ram"],
    "year": { "bo": 1996 },
    "fun": [function () { console.log("book name is om"); }]
}
console.log(lib);
let { names: [a, b, c], year: { bo }, fun: [fun] } = lib
console.log(a, b, c, bo, );
fun()
//Activity4
const v={"name":"sai","year":1994,"fun":function(){return `${this.name}  ${this.year}`}}//it refers to object it self
console.log(v.fun());
for (const key in book) {
    let element=book[key]
 console.log(element);
}
 let n=Object.keys(lib)
 let m=Object.values(lib)
 console.log(n,m);


