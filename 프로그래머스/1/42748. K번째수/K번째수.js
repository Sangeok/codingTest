function solution(array, commands) {
    let result = [];
    for(let t = 0; t<commands.length; t++) {
        let [i,j,k] = commands[t];
        let newArr = array.slice(i-1,j).sort((a,b) => a-b);
        let findNum = newArr[k-1];
        result.push(findNum);
    }
    
    return result;
}