function solution(word) {
    let dictionary = [];
    let arr = ["A", "E", "I", "O", "U"];
    
    DFS("", 0);
    
    function DFS(currentStr, count) {
        if(count > 5) return;
        
        if(currentStr !== "") dictionary.push(currentStr);
        
        for(let i = 0; i<arr.length; i++) {
            DFS(currentStr + arr[i], count+1);
        }
    }
    
    return dictionary.indexOf(word) + 1;
    
}