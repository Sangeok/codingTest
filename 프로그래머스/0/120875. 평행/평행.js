function solution(dots) {
    let check = false;
    
    if (isParallel(dots[0], dots[1], dots[2], dots[3])) check = true;
    if (isParallel(dots[0], dots[2], dots[1], dots[3])) check = true;
    if (isParallel(dots[0], dots[3], dots[1], dots[2])) check = true;
    
    return check === true ? 1 : 0;

}

function isParallel([x1,y1], [x2,y2], [x3,y3], [x4,y4]) {
    if(x2 - x1 === 0 && x4 - x3 === 0) {
        return true;
    }
    
    if(x2 - x1 === 0 || x4 - x3 === 0) {
        return false;
    }
    
    let slope1 = (y4-y3)/(x4-x3);
    let slope2 = (y2-y1)/(x2-x1);
    
    return Math.abs(slope2 - slope1) < Number.EPSILON;
    
}