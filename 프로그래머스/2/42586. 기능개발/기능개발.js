function solution(progresses, speeds) {
    let restDay = [];
    
    for(let i = 0; i<progresses.length; i++) {
        let currentProgress = progresses[i];
        let currentSpeed = speeds[i];
        let count = 0;
        
        while(currentProgress < 100) {
            currentProgress = currentProgress + currentSpeed;
            count++;
        }
        restDay.push(count);
    }
    
    let result = [];
    let maxDay = restDay[0];
    let count = 1;
    
    for(let i = 1; i<restDay.length; i++) {
        if(maxDay < restDay[i]) {
            maxDay = restDay[i];
            result.push(count);
            count = 1;
        } else {
            count++;
        }
    }
    
    result.push(count);
    
    return result;
    
}