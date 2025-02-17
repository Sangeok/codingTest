function solution(players, callings) {
    let playerMap = new Map();
    let rankMap = new Map();
    
    players.forEach((player,index) => {
        playerMap.set(player,index);
        rankMap.set(index, player);
    })
    
    callings.forEach((player,index) => {
        let currentPlayer = playerMap.get(player);
        let frontPlayer = rankMap.get(currentPlayer-1);
        
        let overTakeNum = playerMap.get(frontPlayer);
        
        playerMap.set(player,overTakeNum);
        playerMap.set(frontPlayer, currentPlayer);
        
        rankMap.set(overTakeNum, player);
        rankMap.set(currentPlayer, frontPlayer);
    })
    
    return Array.from(rankMap.values());
}
