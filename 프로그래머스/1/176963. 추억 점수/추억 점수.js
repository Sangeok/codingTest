function solution(name, yearning, photo) {
    let result = [];
    let obj = {};
    
    for(let [index,value] of name.entries()) {
        obj[value] = yearning[index];
    }
    
    for(let i = 0; i<photo.length; i++) {
        let nowMemebers = photo[i];
        let sum = 0;
        for(let k of nowMemebers) {
            sum = sum + (obj[k] || 0);
        }
        result.push(sum);
    }
    
    return result;
}