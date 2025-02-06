function solution(s) {
    if(s.split('').length === 4 || s.split('').length === 6) {
        return /^\d+$/.test(s);
    }
    else return false;
}