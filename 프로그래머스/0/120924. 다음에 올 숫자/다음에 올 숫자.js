function solution(common) {
    let diff1 = common[1] - common[0];
    let diff2 = common[2] - common[1];
    
    if(diff1 === diff2) {
        return common[common.length-1] + diff1;
    }
    else {
        let r = common[2] / common[1];
        return common[common.length-1] * r;
    }
}