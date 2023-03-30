const maxDivide = (a, b) => {
    while( a%b === 0 ) {
        a = a/b;
    }
    return a;
}

const isUgly = (num) => {
    num = maxDivide(num, 2);
    num = maxDivide(num, 3);
    num = maxDivide(num, 5);
    return num === 1
}

const uglyNumbers = (n) => {    
    let counter = 1;
    let i = 1;

    while (counter <= n) {
        if(isUgly(i)) {
            console.log(i);
            counter++;
        }
        i++;
        
    }
    
}


uglyNumbers(150)
