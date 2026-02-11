function solution(numbers) {
    let numberSet = new Set();
    
    let numbersArr = numbers.split('');
    
    function getNum(arr, currentStr) {
        if(currentStr.length > 0) numberSet.add(Number(currentStr));
        
        if(arr.length === 0) return;
        
        for(let i = 0; i<arr.length; i++) {
            let currentValue = arr[i];
            let copyArr = [...arr];
            copyArr.splice(i,1);
            getNum(copyArr, currentStr + currentValue);
        }
    }
    
    getNum(numbers, "");
    
    console.log("numberSet", numberSet)
    
    return [...numberSet].filter((item) => isPrime(item)).length;
    
}

function isPrime(n) {
    if(n < 2) return false;
    if(n === 2) return true;
    
    for(let i = 2; i<=Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    
    return true;
}