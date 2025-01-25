function solution(num, total) {
    let startN = Math.floor((2*total - Math.pow(num,2) + num) / (2* num));
    return Array.from({length : num}, (_,i) => startN+i);
}