function solution(n, lost, reserve) {
    let real_lost = lost.filter((item) => !reserve.includes(item));
    let real_reserve = reserve.filter((item) => !lost.includes(item));
    
    let reserve_set = new Set(real_reserve);
    
    real_lost.sort((a,b) => a-b);
    let result = n - real_lost.length;
    
    for(let lost_student of real_lost) {
        if(reserve_set.has(lost_student - 1)) {
            reserve_set.delete(lost_student - 1);
            result++;
        } else if (reserve_set.has(lost_student + 1)){
            reserve_set.delete(lost_student + 1);
            result++;
        }
    }
    
    return result;
}