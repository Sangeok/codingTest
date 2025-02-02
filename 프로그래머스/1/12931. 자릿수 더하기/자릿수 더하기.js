function solution(n)
{
    let nArr = n.toString().split('');
    let sum = 0;
    for(let i of nArr) {
        sum = sum + parseInt(i);
    }
    
    return sum;
}