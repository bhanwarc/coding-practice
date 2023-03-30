const pyramid = (num) => {
    let a = 0;
    for(let i  = 1; i <=num; i++) {
        let step = "";
        for(let k  = num - 1; k >= i; k--) {
            step += " " 
        }
        for(let j  = 1; j <= i + a; j++) {
            step += "#" 
        }
        a++;
        console.log(step)
    }
}

pyramid(5)