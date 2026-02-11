function solution(x, y, n) {
    if(x === y) return 0;
    
    let queue = [[x,0]];
    let head = 0;
    
    let visited = new Array(y+1).fill(false);
    
    while(head < queue.length) {
        let [currentNum, count] = queue[head++];
        
        let nextSteps = [currentNum + n, currentNum * 2, currentNum * 3];
        
        for(let next of nextSteps) {
            if(y === next) return count + 1;
            
            if(next < y && !visited[next]) {
                visited[next] = true;
                queue.push([next, count+1]);
            }
        }
    }
    
    return -1;
    
}