function solution(s) {
    let sArr = s.split('');
    // s의 길이가 짝수
    if(sArr.length % 2 === 0) {
        return [sArr[(sArr.length / 2)-1], sArr[(sArr.length / 2)]].join('')
    }
    // s의 길이가 홀수
    else {
        return [sArr[Math.floor(sArr.length / 2)]].join('');
    }
}