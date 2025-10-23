function solution(array, commands) {
    let result = [];
    
    for(let i = 0; i<commands.length; i++) {
        const sliceStart = commands[i][0];
        const sliceEnd = commands[i][1];
        
        const num = array.slice(sliceStart-1,sliceEnd);
        num.sort((a,b) => a-b);
        
        result.push(num[commands[i][2]-1]);
    }
    
    return result;
}