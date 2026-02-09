function solution(x, y, n) {
    if(x === y) return 0;
    
    let queue = [[x,0]];
    let head = 0;
    
    let visited = new Array(n+1).fill(false);
    visited[x] = true;
    
    while(head < queue.length) {
        let [currentValue, count] = queue[head++];
        
        let nextStep = [currentValue + n, currentValue * 2, currentValue * 3];
        
        for(let next of nextStep) {
            if(next === y) {
                return count + 1;
            }
            
            if(next < y && !visited[next]) {
                visited[next] = true;
                queue.push([next, count+1]);
            }
        }
    }
    
    return -1;
}