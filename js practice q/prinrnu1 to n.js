//prime number 1 to n
for (let i = 1; i <= 20; i++) {
    for (let j = 2; j <=i; j++) {
        if (i % j == 0) {
            break;
        }
        else {
            console.log(i);
        }
    }

}