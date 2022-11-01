export const gcd_two_values = (x, y) => {

    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    console.info('EEE', x)
    return x;
}

export const areCoprime = (value1, value2) => {
    if ( gcd_two_values(value1, value2) === 1 ) {
        return true;
    }
    return false;
}

export const isPrime = value => {
    const boundary = Math.floor(Math.sqrt(value));
    for (let i = 2; i <= boundary; i++) {
        if (value % i === 0) {
            return false;
        }
    } 
    return value >= 2;    
}

export const primeFactorize = value => {
    // 60 

    let done = false;
    let primeFactors = [];
    while (!done) {

        let factors = findFactors(value).reverse();
        
        let highestPrimeFactor = factors.filter((value) => isPrime(value))[0]
        primeFactors.push(highestPrimeFactor);
        

        value = value / highestPrimeFactor;
        
        if (value === 1) {
            done = true;
        }
    }

    return primeFactors;



}

export const isComposite = value => {
    return findFactors(value).length > 2;
}

export const findFactors = value => {
    let arr = [];
    for(let i = 1; i<=value; i++) {
        if(value % i === 0){
            arr.push(i);
        }
    }
    return arr;    
}