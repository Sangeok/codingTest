function solution(k, dungeons) {
    let visited = new Array(dungeons.length).fill(false);
    let result = 0;
    
    DFS(k, 0);
    
    function DFS(currentTired, count) {
        result = Math.max(result, count);
        
        for(let i = 0; i<dungeons.length; i++) {
            let [needsTired, consumeTired] = dungeons[i];
            
            if(!visited[i] && currentTired >= needsTired) {
                visited[i] = true;
                DFS(currentTired - consumeTired, count+1);
                visited[i] = false;
            }
        }
    }
    
    return result;
}

