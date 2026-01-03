function solution(n) {
    let originalN = n;
    let numOneCount = originalN.toString(2).split("1").length-1;
    
    n++;
    while(true) {
        let currentNum = n;
        let currentNumOneCount = currentNum.toString(2).split("1").length-1;
        if(currentNumOneCount === numOneCount) {
            return currentNum;
        }
        
        n++;
    }
}