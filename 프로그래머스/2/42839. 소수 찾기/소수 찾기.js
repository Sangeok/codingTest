function solution(numbers) {
    let numberSet = new Set();
    
    let numbersArr = numbers.split('');
    
    function makePrime(arr, str) {
        if(str.length > 0) {
            numberSet.add(Number(str));
        }
        
        if(arr.length === 0) return;
        
        for(let i = 0; i<arr.length; i++) {
            const copyArr = [...arr];
            copyArr.splice(i,1);
            makePrime(copyArr, str + arr[i]);
        }
    }
    
    makePrime(numbersArr, "");
    
    return [...numberSet].filter((item) => isPrime(item)).length;
}

function isPrime(n) {
    if(n < 2) return false;
    if(n === 2) return true;
    if(n % 2 === 0) return false;
    
    for(let i = 3; i<=Math.sqrt(n); i++) {
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}