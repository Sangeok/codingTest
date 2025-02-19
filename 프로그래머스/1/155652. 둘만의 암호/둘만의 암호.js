function solution(s, skip, index) {
    // 알파벳에 대한 객체를 만들어야 할듯? 
    // 사용 가능한 알파벳인지에 대한 유무 판별 객체
    
    // let alphabetMap = new Map();
    let alphabetArr = [];
    let result = [];
    
    for(let i = 0; i<26; i++) {
        let char = String.fromCharCode(97 + i);
        if(!skip.includes(char)) {
            alphabetArr.push(char);
        }
    }
    
    for(let char of s) {
        let findIndex = alphabetArr.indexOf(char);
        let newCharIndex = (findIndex+index)%alphabetArr.length;
        result.push(alphabetArr[newCharIndex]);
    }
    return result.join('');
}