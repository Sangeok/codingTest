function solution(x, y, n) {
    if(x === y) return 0;
    
    const queue = [[x,0]];
    let head = 0;
    
    const visited = new Array(y+1).fill(0);
    visited[x] = 1;
    
    while(head < queue.length) {
        const [current, count] = queue[head++];
        
        let nextStep = [current + n, current * 2, current * 3];
        
        for(let next of nextStep) {
            if(next === y) {
                return count + 1;
            }
            
            if(next < y && visited[next] === 0) {
                visited[next] = 1;
                queue.push([next, count+1]);
            }
        }
    }
    
    return -1;
}