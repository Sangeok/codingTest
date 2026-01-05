function solution(arr) {
    arr.sort((a,b) => a-b);
    
    let currentNum = arr[0];
    for(let i = 0; i<arr.length; i++) {
        currentNum = getLCM(currentNum, arr[i]);
    }
    
    return currentNum;
}

// 최소공배수
function getLCM(a,b) {
    return (a*b) / getGCD(a,b);
}

// 최대공약수
function getGCD(a,b) {
    while(b > 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    
    return a;
}