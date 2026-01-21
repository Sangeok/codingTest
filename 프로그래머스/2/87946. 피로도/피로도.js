function solution(k, dungeons) {
    let result = 0;
    let visited = new Array(dungeons.length).fill(false);
    
    DFS(k, 0);
    
    function DFS(currentTired, count) {
        result = Math.max(result, count);
        
        for(let i = 0; i<dungeons.length; i++) {
            let [needTired, consumeTired] = dungeons[i];
            
            if(!visited[i] && currentTired >= needTired) {
                visited[i] = true;
                DFS(currentTired - consumeTired, count+1);
                visited[i] = false;
            }
        }
    }
    
    return result;
}

