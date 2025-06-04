function solution(n)
{
    let strN = n.toString().split('');
    let sum = 0;
    
    for(let i of strN) {
        sum = sum + parseInt(i);
    }
    
    return sum;
}