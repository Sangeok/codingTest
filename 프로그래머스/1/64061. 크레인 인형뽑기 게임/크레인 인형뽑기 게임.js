function solution(board, moves) {
    let stack = [];
    let result = 0;
    
    for(let currentMove of moves) {
        let targetColumn = currentMove - 1;
        let currentDoll = 0;
        
        for(let i = 0; i<board.length; i++) {
            if(board[i][targetColumn] !== 0) {
                currentDoll = board[i][targetColumn];
                stack.push(currentDoll);
                board[i][targetColumn] = 0;
                break;
            }
        }
        

         while(stack.length >= 2 && stack[stack.length - 1] === stack[stack.length - 2]) {
            stack.pop();
            stack.pop();
             
            result++;
            result++;
        }
    }
    
    return result;
}