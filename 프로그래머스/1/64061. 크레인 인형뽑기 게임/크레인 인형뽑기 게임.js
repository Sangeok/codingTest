function solution(board, moves) {
    let stack = [];
    let result = 0;
    
    for(let move of moves) {
        let currentMove = move - 1;
        
        for(let i = 0; i<board.length; i++) {
            let currentPosition = board[i][currentMove];
            let findDoll = false;
            
            if(currentPosition !== 0) {
                stack.push(currentPosition);
                board[i][currentMove] = 0;
                findDoll = true;
            }
            
            while(stack.length >= 2 && stack[stack.length-1] === stack[stack.length-2]) {
                stack.pop();
                stack.pop();
                result++;
                result++;
            }
            
            if(findDoll) break;
        }
    }
    
    return result;
}