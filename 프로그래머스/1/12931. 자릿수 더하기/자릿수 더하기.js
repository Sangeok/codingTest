function solution(n)
{
    const sum = n.toString().split('').reduce((acc, cur) => acc + parseInt(cur), 0);
    
    return sum;
}