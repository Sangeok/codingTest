function solution(absolutes, signs) {
    let sum = 0;
    for(let i = 0; i<absolutes.length; i++) {
        // 양수
        if(signs[i]) {
            sum = sum + absolutes[i];
        }
        // 음수
        else {
            sum = sum - absolutes[i];
        }
    }
    
    return sum;
}