function solution(s) {
    let beforeNum = 0;
    let sum = 0;
    
    s.split(' ').map((item) => {
        if(item === 'Z') {
            sum = sum - beforeNum;
        }
        else {
            sum = sum + Number(item);
            beforeNum = Number(item);
        }
    })
    
    return sum;
}