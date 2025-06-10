function solution(n) {
    let result = "수";
    let count = 1;
    while(count < n) {
        if(count % 2 === 1) result = result + "박";
        else result = result + "수";
        count++
    }
    
    return result;
}