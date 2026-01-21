function solution(progresses, speeds) {
    let restDay = [];
    
    for(let i = 0; i<progresses.length; i++) {
        let currentProgress = progresses[i];
        let currentSpeed = speeds[i];
        
        let calRestDay = 0;
        while(currentProgress < 100) {
            currentProgress = currentProgress + currentSpeed;
            calRestDay++;
        }
        restDay.push(calRestDay)
    }
    
    let maxDay = restDay[0];
    let count = 1;
    let result = [];
    
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