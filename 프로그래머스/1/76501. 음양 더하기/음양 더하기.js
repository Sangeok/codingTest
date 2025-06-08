function solution(absolutes, signs) {
    let sum = 0;
    for(let [index, value] of signs.entries()) {
        if(value) {
            sum = sum + absolutes[index];
        }
        else {
            sum = sum - absolutes[index];
        }
    }
    
    return sum;
}