function solution(k, dungeons) {
    let result = 0;
    
    const visited = new Array(dungeons.length).fill(false);
    
    function dfs(currentK, count) {
        result = Math.max(result, count);
        
        for(let i = 0; i<dungeons.length; i++) {
            let [minTired, consumeTired] = dungeons[i];
            
            if(!visited[i] && currentK >= minTired) {
                visited[i] = true;
                dfs(currentK - consumeTired, count+1);
                visited[i] = false;
            }
        }
    }
    
    dfs(k,0);
    
    return result;
}

// 최소 피로도 : 탐험을 시작하기 위해 필요한 최소 필요도
// 소모 피로도 : 던전 탐험을 마쳤을 때 소모됨.
