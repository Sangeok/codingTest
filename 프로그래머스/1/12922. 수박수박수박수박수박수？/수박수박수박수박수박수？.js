function solution(n) {
    let result = "";
    let count = 1;
    
    while(n >= count) {
        if(count % 2 === 0) {
            result = result + "박";
        } else {
            result = result + "수";
        }
        count++;
    }
    
    return result;
}