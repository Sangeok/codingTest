function solution(numbers) {
    let numSet = new Set();
    
    let numArr = numbers.split('').map(Number);
    
    function getPrimeNum(arr, currentStr) {
        if(currentStr !== "") numSet.add(Number(currentStr));
        
        if(arr.length === 0) return ;
        
        for(let i = 0; i<arr.length; i++) {
            let currentNum = arr[i];
            let copyArr = [...arr];
            copyArr.splice(i,1);
            getPrimeNum(copyArr, currentStr + currentNum);
        }
    }
    
    getPrimeNum(numbers, "");
    
    return [...numSet].filter((item) => isPrime(item)).length;
    
}

function isPrime(n) {
    if(n < 2) return false;
    if(n === 2) return true;
    
    for(let i = 2; i<=Math.sqrt(n); i++) {
        if(n % i === 0) return false;
    }
    
    return true;
}