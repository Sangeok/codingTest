function solution(n, lost, reserve) {
    let real_lost = lost.filter((item) => !reserve.includes(item));
    let real_reserve = reserve.filter((item) => !lost.includes(item));
    
    let reserve_set = new Set(real_reserve);
    let not_lost = n - real_lost.length;
    
    real_lost.sort((a,b) => a-b);
    
    for(let lost_student of real_lost) {
        if(reserve_set.has(lost_student-1)) {
            console.log("퍽1")
            not_lost++;
            reserve_set.delete(lost_student-1)
            continue;
        } else if(reserve_set.has(lost_student+1)) {
            console.log("퍽2")
            not_lost++
            reserve_set.delete(lost_student+1)
        }
    }
    
    return not_lost;
}