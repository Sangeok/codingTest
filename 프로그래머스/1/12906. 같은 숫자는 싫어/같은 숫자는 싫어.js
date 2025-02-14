function solution(arr)
{
    let result = [];
    
    for(let i = 0; i<arr.length-1; i++) {
        if(arr[i] !== arr[i+1]) {
            result.push(arr[i]);
        }
    }
    result.push(arr[arr.length-1]);
    
    return result;
}