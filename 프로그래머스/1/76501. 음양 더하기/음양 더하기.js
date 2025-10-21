function solution(absolutes, signs) {
    let sum = 0;
    
    for(let i = 0; i<absolutes.length; i++) {
        if(signs[i]) {
            sum = sum + absolutes[i];
        } else {
            sum = sum - absolutes[i];
        }
    }
    
    return sum;
}