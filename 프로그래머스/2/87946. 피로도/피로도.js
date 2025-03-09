function solution(k, dungeons) {
    let n = dungeons.length;
    let maxCount = 0;
    let visited = Array(n).fill(false);
    
    function DFS(tired, count) {
        maxCount = Math.max(maxCount, count);
        
        for(let i = 0; i<n; i++) {
            if(!visited[i] && tired >= dungeons[i][0]) {
                visited[i] = true;
                
                DFS(tired-dungeons[i][1], count+1);
                
                visited[i] = false;
            }
        }
    }
    
    DFS(k,0);
    
    return maxCount;
    
}