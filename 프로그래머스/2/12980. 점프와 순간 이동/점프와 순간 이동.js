function solution(n)
{
    let count = 0;
    while(n > 0) {
        if(n % 2 === 0) {
            n = n / 2;
        }
        else if(n % 2 === 1) {
            n = n - 1;
            count++;
        }
    }
    
    return count;
}
