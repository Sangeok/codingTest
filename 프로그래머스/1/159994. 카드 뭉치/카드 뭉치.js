function solution(cards1, cards2, goal) {
    let count1 = 0;
    let count2 = 0;
    
    for(let i of goal) {
        let cards1_word = cards1[count1];
        let cards2_word = cards2[count2];
        
        if(cards1_word === i) {
            count1++;
            continue;
        } else if(cards2_word === i) {
            count2++;
            continue;
        }
        else return "No"
    }
    
    return "Yes";
}