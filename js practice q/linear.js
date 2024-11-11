let array = [1, 2, 3, 4, 5, 6]
let x=prompt("Enter the search number")
for (let index = 0; index < array.length; index++) {
    if (x == array[index]) {
        console.log(`${x} at index ${index}`)
    }
    else if (x==6) {
        console.log(`${x} is their`)
    }
}


