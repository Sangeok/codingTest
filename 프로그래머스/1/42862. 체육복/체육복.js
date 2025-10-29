function solution(n, lost, reserve) {
    let real_lost = lost.filter((item) => !reserve.includes(item)).sort((a,b) => a-b);
    let real_reserve = reserve.filter((item) => !lost.includes(item)).sort((a,b) => a-b);
    
    let reserve_set = new Set(real_reserve);
    let answer = n - real_lost.length;
    
    for(let lost_student of real_lost) {
        if(reserve_set.has(lost_student-1)) {
            answer++;
            reserve_set.delete(lost_student-1);
        } else if(reserve_set.has(lost_student+1)) {
            answer++;
            reserve_set.delete(lost_student+1);
        }
    }
    
    return answer
}