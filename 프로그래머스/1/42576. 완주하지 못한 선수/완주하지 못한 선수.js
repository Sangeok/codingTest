
function solution(participant, completion) {
    let map = new Map();

    for(let i = 0; i<participant.length; i++) {
        map.set(participant[i],(map.get(participant[i])+1 ||0));
    }
    
    for(let key of completion) {
        map.set(key,(map.get(key)-1));
    }
    
    for(let [key, value] of map) {
        if(value >= 0) {
            return key;
        }
    }
    
  
}