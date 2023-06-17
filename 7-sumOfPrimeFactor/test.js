function sumOfPrimeFactors(n) {
    //n itself may be a prime;
  const primes = [...Array(n).keys(),n].slice(2).filter(k=>isPrime(k));
  return primes.filter(f=>(n%f==0)).reduce((sum,v)=>sum+v,0);
}

const isPrime=(a)=>{
    if(a==0||a==1){
        return false;
    }
    let i=2;
    while(i<a){
        if(a%i==0){
            return false;
        }
        i++;
    }
    return true;
}
console.log(sumOfPrimeFactors(91));
// Leave this so we can test your code:
module.exports = sumOfPrimeFactors;