function solution(food) {
    let result = [0];
    
    for(let i = food.length-1; i>0; i--) {
        const num = Math.floor(food[i]/2); // 한 쪽에 넣는 수
        
        for(let k = 0; k<num; k++) {
            result.unshift(i);
            result.push(i);
        }
    }
    
    return result.join('').toString();
}