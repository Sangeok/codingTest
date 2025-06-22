function solution(cards1, cards2, goal) {
    for(let i = 0; i<goal.length; i++) {
        let currentStr = goal[i];
        
        let card1Str = cards1.shift();
        let card2Str = cards2.shift();
        
        if(currentStr === card1Str) {
            cards2.unshift(card2Str);
        } else if (currentStr === card2Str){
            cards1.unshift(card1Str);
        } else {
            return "No";
        }
    }
    
    return "Yes";
}