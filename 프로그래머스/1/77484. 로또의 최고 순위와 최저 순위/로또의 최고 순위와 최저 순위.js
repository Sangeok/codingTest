function solution(lottos, win_nums) {
    let obj = {
        6 : 1,
        5 : 2,
        4 : 3,
        3 : 4,
        2 : 5,
        1 : 6,
        0 : 6
    }
    
    let count = 0;
    let countZero = lottos.filter((item) => item === 0).length || 0;
    for(let i of win_nums) {
        const isFind = lottos.some((item) => i === item);
        if(isFind) count++;
    }
    
    return [obj[count], obj[count+countZero]].sort((a,b) => a-b);
}