function solution(progresses, speeds) {
    let array = [];
    let result = [];
    
    for(let i = 0; i<progresses.length; i++) {
        let currentProgress = progresses[i];
        let speed = speeds[i];
        
        let count = 0;
        while(currentProgress < 100) {
            currentProgress = currentProgress + speed;
            count++;
        }
        
        array.push(count);
    }
    
    let answer = [];
    let count = 1;
    let maxDay = array[0];
    
    for(let i = 1; i<array.length; i++) {
        if(array[i] <= maxDay) {
            count++;
        } else {
            answer.push(count);
            count = 1;
            maxDay = array[i];
        }
    }
    
    answer.push(count);

    return answer;
    
}