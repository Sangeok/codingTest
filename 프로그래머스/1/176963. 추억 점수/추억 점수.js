function solution(name, yearning, photo) {
    let obj = {};
    let result = [];
    
    for(let i = 0; i<name.length; i++){
        obj[name[i]] = yearning[i];
    }
    
    for(let i = 0; i<photo.length; i++) {
        let sum = 0;
        for(let k of photo[i]) {
            sum = sum + (obj[k] || 0);
        }
        result.push(sum);
    }
    
    return result;
}