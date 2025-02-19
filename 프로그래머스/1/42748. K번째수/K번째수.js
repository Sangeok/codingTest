function solution(array, commands) {
    let result = [];

    for(let i = 0; i<commands.length; i++) {
        let startIndex = commands[i][0]-1;
        let endIndex = commands[i][1];
        let findIndex = commands[i][2]-1;
        
        let newArr = array.slice(startIndex,endIndex).sort((a,b) => a-b);
        
        result.push(newArr[findIndex]);
    }
    
    return result;
}