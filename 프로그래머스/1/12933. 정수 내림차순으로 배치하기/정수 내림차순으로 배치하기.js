function solution(n) {
    let nString = n.toString().split('').sort((a,b) => b-a).join('');
    return parseInt(nString);
}