function solution(k, dungeons) {
    let visited = new Array(dungeons.length).fill(false);
    let max = 0;
    
    DFS(k, 0);
    
    function DFS(restTired, count) {
        max = Math.max(max, count);
        
        for(let i = 0; i<dungeons.length; i++) {
            let [needsTired, consumeTired] = dungeons[i];
            
            if(!visited[i] && needsTired <= restTired) {
                visited[i] = true;
                DFS(restTired - consumeTired, count+1);
                visited[i] = false;
            }
        }
    }
    
    return max;
    
}

