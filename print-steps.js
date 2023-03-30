const printSteps = (num) => {
    for(let i  = 0; i < num; i++) {
        let step = "";
        for(let j  = 0; j <= i; j++) {
            step += "#" 
        }
        console.log(step)
    }
}

printSteps(5)