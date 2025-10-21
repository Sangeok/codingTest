function solution(numbers) {
    const arr = [0,1,2,3,4,5,6,7,8,9];
    let sum = 0;
    
    for(let i of arr) {
        if(!numbers.includes(i)) {
            sum = sum + i;
        }
    }
    
    console.log(sum)
    
    return sum;
}