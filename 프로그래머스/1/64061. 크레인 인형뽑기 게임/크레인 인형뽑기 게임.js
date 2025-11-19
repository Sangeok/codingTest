function solution(board, moves) {
    let stack = [];
    let result = 0;
    
    for(let move of moves) {
        let currentMove = move - 1;
        // let currentDoll = 0;
        
        for(let i = 0; i<board.length; i++) {
            let currentDoll = board[i][currentMove];
            if(board[i][currentMove] !== 0) {
                board[i][currentMove] = 0;
                stack.push(currentDoll);
                break;
            }
        }
        
        while(stack.length >= 2 && stack[stack.length-1] === stack[stack.length-2]) {
            stack.pop();
            stack.pop();
            result++;
            result++;
        }
    }
    
    return result;
}