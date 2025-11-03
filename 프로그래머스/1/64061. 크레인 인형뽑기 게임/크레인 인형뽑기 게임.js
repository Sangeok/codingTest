function solution(board, moves) {
    let stack = [];
    let result = 0;
    
    for(let move of moves) {
        let currentMove = move - 1;
        
        for(let i = 0; i<board.length; i++) {
            const currentBoard = board[i][currentMove];
            
            if(currentBoard !== 0) {
                stack.push(board[i][currentMove])
                board[i][currentMove] = 0;
                break;
            }
        }
        
        while(stack.length >= 2 && stack[stack.length-1] === stack[stack.length-2]) {
            stack.pop();
            stack.pop();
            
            result = result + 2;
        }
    }
    
    return result;
}