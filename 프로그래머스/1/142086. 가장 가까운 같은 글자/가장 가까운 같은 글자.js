function solution(s) {
    let result = [];
    let alphabetMap = new Map();
    
    for (let i = 65; i <= 90; i++) {
        let alphabet = String.fromCharCode(i).toLowerCase();
        alphabetMap.set(alphabet, -1);
    }

    let sArr = s.split('');
    for(let i = 0; i<sArr.length; i++) {
        let currentValue = alphabetMap.get(sArr[i]);
        if(currentValue === -1) {
            result.push(-1);
            alphabetMap.set(sArr[i], i);
        }
        else {
            let nowNum = i - currentValue;
            result.push(nowNum);
            alphabetMap.set(sArr[i], i);
        }
    }
    
    return result;
    
}