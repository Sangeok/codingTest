function solution(food) {
    let answer = [0];
    for(let i = food.length-1; i>0; i--) {
        let item = food[i];
        let n = Math.floor(item/2);
        for(let k = 0; k<n; k++) {
            answer.push(i);
            answer.unshift(i);
        }
    }
    
    return answer.join('');
}