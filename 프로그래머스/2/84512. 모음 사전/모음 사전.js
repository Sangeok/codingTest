function solution(word) {
    let dictionary = [];
    let vowles = ["A","E","I","O","U"];
    
    DFS("");
    
    function DFS(currentWords) {
        if(currentWords.length > 5) return;
        
        if(currentWords !== "") dictionary.push(currentWords);
        
        for(let i = 0; i<vowles.length; i++) {
            DFS(currentWords + vowles[i]);
        }
    }
    
    return dictionary.indexOf(word) + 1
    
}