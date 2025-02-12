function solution(name, yearning, photo) {
    const obj = {};
    let result = [];
    for(let i = 0; i<name.length; i++) {
        obj[name[i]] = yearning[i];
    }
    
    for(let i = 0; i<photo.length; i++) {
        let sum = 0;
        for(let j = 0; j<photo[i].length; j++) {
            sum = sum + (obj[photo[i][j]] || 0);
        }
        result.push(sum);
    }
    
    return result;
}