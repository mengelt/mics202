export const quadratic_residue = (a, p) => {

    // https://medium.com/coinmonks/integer-factorization-defining-the-limits-of-rsa-cracking-71fc0675bc0e
    // https://www.rieselprime.de/ziki/Modular_square_root
    // r²=a(mod p)

    if ( !areCoprime(a, p) ) {
        return null;
    }

    let idx = 1
    
    while (idx < p) {

        if ( ( Math.pow(idx,2) % p === +a )) {
            return idx
        } else {
            idx++;
        }

    }

    return [-idx, idx];

}

export const multiplicitive_inverse = (a, modulo) => {

    if ( !areCoprime(a, modulo) ) {
        return null;
    }

    // ab = 1 mod (modulo)

    let b = 1;
    let found = false;

    while (!found) {

        if ( (a * b) % modulo === 1 ) {
            found = true;
        } else {
            b++;
        }
        
    }
    
    return b;


}

// https://www.techiedelight.com/extended-euclidean-algorithm-implementation/
export const extended_gcd = (a, b) => {
        
    if (a === Infinity || a === -Infinity || b === Infinity || b === -Infinity) {
        return [Infinity, Infinity, Infinity];
    }
    let signX = (a < 0) ? -1 : 1,
        signY = (b < 0) ? -1 : 1,
        x = 0,
        y = 1,
        u = 1,
        v = 0,
        q, r, m, n;
    a = Math.abs(a);
    b = Math.abs(b);
    
    while (a !== 0) {
        q = Math.floor(b / a);
        r = b % a;
        m = x - u * q;
        n = y - v * q;
        b = a;
        a = r;
        x = u;
        y = v;
        u = m;
        v = n;
    }
    return [b, signX * x, signY * y];
}

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


export const convertToBases = (currentBase, value) => {

    function dec2bin(dec) {
        return (dec >>> 0).toString(2);
    }
    
    let binary;
    let octal;
    let hexidecimal;

    if ( currentBase === 10 ) {
        binary = dec2bin(value);
        octal = value.toString(8);
        hexidecimal = value.toString(16);
        binary = value.toString(2);
    }


    let result = {
        10: value,
        8: octal,
        16: hexidecimal,
        2: binary
    }
    result = {...result, [currentBase]: value}
    console.info({result})
    return result;
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