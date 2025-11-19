function solution(new_id) {
    let result = new_id.toLowerCase();
    
    result = result.replace(/[^a-z0-9-_.]/g, '');
    
    result = result.replace(/\.{2,}/g, '.');
    
    result = result.replace(/^\.|\.$/g, '');
    
    if(result.length === 0) {
        result = "a";
    }
    
    if(result.length >= 16) {
        result = result.substring(0,15);
        if(result[result.length-1] === ".") {
            result = result.slice(0,-1);
        }
    }
    
    while(result.length <= 2) {
        result = result + result[result.length-1];
    }
    
    return result;
}