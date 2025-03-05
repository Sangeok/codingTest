function solution(arr) {
    let result = arr[0];
    for(let i = 1; i<arr.length; i++) {
        result = getLCM(result, arr[i]);
    }
    
    return result;
}

// 최소공배수
function getLCM(a,b) {
    return (a*b) / getGCD(a,b);
}

// 최대공약수
function getGCD(a,b) {
    while(b>0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    
    return a;
}