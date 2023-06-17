function semiPrimeCount(n) {
    const primes = [...Array(n).keys()].slice(2).filter(item=> {
        for(let i=2;i<item;i++){
            if(item%i==0){
                return false;
            }
        }
        return true;
        }
    )
    //console.log('primes',primes);
    const set = new Set();
    for(let row of primes){
        for(let col of primes){
            let product = row*col;
            if(product<n){
                set.add(product);
            }
        }
    }
    console.log( Array.from(set));
    const length=Array.from(set).length;
    console.log(length);
    return length;
}



semiPrimeCount(10);

// Leave this so we can test your code:
module.exports = semiPrimeCount;
