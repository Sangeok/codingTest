function solution(order) {
    let stack = [];
    let idx = 0;
    
    for(let box = 1; box <=order.length; box++) {
        stack.push(box);
        
        while(stack.length > 0 && stack[stack.length-1] === order[idx]) {
            stack.pop();
            idx++;
        }
    }
    
    return idx;
    
    
}

// 택배 기사님이 알려준 순서에 맞게 택배 상자를 실어야 함.
// 택배 기사님이 알려준 순서가 아니라면 잠시 다른 곳에 보관해야 함. (보조 컨테이너 벨트)
// 보조 컨테이너 벨트는 맨 앞의 상자만 뺄 수 있음.(가장 마지막에 보조 컨테이너 벨트에 보관한 상자부터 꺼냄)
// 못 꺼내면 거기서 끝