function solution(participant, completion) {
    let obj = {};
    
    for(let i of participant) {
        obj[i] = obj[i] + 1 || 1;
    }
    
    for(let i of completion) {
        obj[i] = obj[i] - 1;
    }
    
    for(let [key, value] of Object.entries(obj)) {
        if(value >= 1) return key
    }
}

