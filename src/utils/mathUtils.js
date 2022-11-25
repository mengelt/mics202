export const isPositiveInteger = (value) => {

    if ( typeof value === "undefined" ) {
        return false;
    }
    
    let regex = /^[0-9]*[1-9][0-9]*$/
    
    let valid = value.toString().match(regex);

    if ( valid === null ) {
        return false;
    }

    return Number.isSafeInteger(+value) && +value >= 0;
}

export const gcd_two_values = (x, y) => {

    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
}

export const eulersTotient = (value) => {

    if ( isPrime(value) ) {
        return value-1;
    } else {
        let found = 0;
        for (let x = value; x > 0; x-- ) {
            if ( areCoprime(value, x) ) {
                found++;
            }
        }
        return found;
    }

}

export const coprimeList = (value) => {
    let results = [];
    for(let i = 1; i < value; i++) {
        if ( areCoprime(value, i) ) {
            results.push(i);
        }
    }
    return results;
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