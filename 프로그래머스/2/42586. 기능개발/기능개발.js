function solution(progresses, speeds) {
    const newProgresses = progresses.map((item, i) => Math.ceil((100 - item)/speeds[i]));
    
    let resultNumArr = [];
    let result = [newProgresses[0]];
    let count = 1;
    
    for(let i = 1; i<newProgresses.length; i++) {
        if(result[0]>=newProgresses[i]) {
            result.push(newProgresses[i]);
        }
        else {
            resultNumArr.push(result.length);
            result = [];
            result.push(newProgresses[i]);
        }
    }
    
    resultNumArr.push(result.length);
    
    return resultNumArr;
}