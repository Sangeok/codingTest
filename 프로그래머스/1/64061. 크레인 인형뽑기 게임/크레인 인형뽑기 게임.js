function solution(board, moves) {
    let stack = [];
    let result = 0;
    
    for(let move of moves) {
        const currentMove = move - 1;
        
        for(let i = 0; i<board.length; i++) {
            const currentDoll = board[i][currentMove];
            
            if(currentDoll !== 0) {
                board[i][currentMove] = 0;
                stack.push(currentDoll);
                break;
            }
        }
        
        while(stack.length >= 2 && stack[stack.length - 1] === stack[stack.length-2]) {
            stack.pop();
            stack.pop();
            result++;
            result++;
        }
    }
    
    return result;
}