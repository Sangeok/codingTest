function solution(progresses, speeds) {
    const newProgresses = progresses.map((item, i) => Math.ceil((100 - item)/speeds[i]));
    
    let result = [];
    let min = newProgresses[0];
    let count = 1;
    
    for(let i = 1; i<newProgresses.length; i++) {
        if(min>=newProgresses[i]) {
            count++;
        }
        else {
            result.push(count);
            min = newProgresses[i];
            count = 1;
        }
    }
    
    result.push(count);
    
    return result;
}