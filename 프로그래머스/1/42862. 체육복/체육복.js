function solution(n, lost, reserve) {
    let real_losts = lost.filter((item) => !reserve.includes(item));
    let real_reserve = reserve.filter((item) => !lost.includes(item));
    
    real_losts.sort((a,b) => a-b);
    let result = n - real_losts.length;
    
    for(let lost_student of real_losts) {
        if(real_reserve.includes(lost_student - 1)) {
            real_reserve = real_reserve.filter((item) => item !== lost_student - 1);
            result++;
        } else if(real_reserve.includes(lost_student + 1)) {
            real_reserve = real_reserve.filter((item) => item !== lost_student + 1);
            result++;
        }
    }
    
    return result;
    
}