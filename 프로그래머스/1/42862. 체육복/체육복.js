function solution(n, lost, reserve) {
    let real_reserve = reserve.filter((item) => !lost.includes(item));
    let real_lost = lost.filter((item) => !reserve.includes(item));
    
    let result = n - real_lost.length;
    
    real_lost.sort((a,b) => a-b);
    let reserve_set = new Set(real_reserve);
    
    for(let lost_student of real_lost) {
        if(reserve_set.has(lost_student - 1)) {
            result++;
            reserve_set.delete(lost_student - 1);
        } else if(reserve_set.has(lost_student + 1)) {
            result++;
            reserve_set.delete(lost_student + 1);
        }
    }
    
    return result;
}