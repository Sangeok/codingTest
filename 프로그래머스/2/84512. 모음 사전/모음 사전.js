function solution(word) {
    let dictionary = [];
    let array = ["A", "E", "I", "O", "U"];
    
    let str = "";
    DFS(str, 0);
    
    function DFS(currentStr, count) {
        if(count > 5) return;
        
        if(currentStr !== "") dictionary.push(currentStr);
        
        for(let i = 0; i<array.length; i++) {
            DFS(currentStr + array[i], count+1);
        }
    }
    
    return dictionary.indexOf(word) + 1;
    
}