function solution(n) {
    let count = 1;
    while(n > count) {
        if(n % count === 1) {
            return count;
        }
        count++;
    }
}