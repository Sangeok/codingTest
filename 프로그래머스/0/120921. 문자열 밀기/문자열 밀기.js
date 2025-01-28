function solution(A, B) {
    let arr = [...A];
    let count = 0;
    
    for(let i = 0; i<arr.length; i++) {
        if(arr.join('') === B) return count;
        else {
            let lastElement = arr.pop();
            arr.unshift(lastElement);
            count ++;
        }
    }
        
    return -1;
}