function solution(numbers, target) {
    let count = 0;
    let visited = Array(numbers.length).fill(false);
    
    function DFS(index, sum) {
        if(index === numbers.length) {
            if(sum === target) count++;
            return;
        }
        
        DFS(index+1, sum+numbers[index]);
        DFS(index+1, sum-numbers[index]);
    }
    
    DFS(0, 0);
    
    return count;
}