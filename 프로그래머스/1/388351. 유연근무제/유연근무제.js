function solution(schedules, timelogs, startday) {
    let result = 0;
    for(let i = 0; i<timelogs.length; i++) {
        let currentLogs = timelogs[i];
        let currentSchedule = getMinTime(schedules[i]+10);
        let count = 0;
        
        for(let k = 0; k<currentLogs.length; k++) {
            let currentLog = currentLogs[k];
            
            let NoWorkDay = ((startday + k) % 7) === 6 || ((startday + k) % 7) === 0;
            if(NoWorkDay) continue;
            
            if(currentSchedule >= getMinTime(currentLog)) count++;
            else break;
        }
        
        if(count === 5) result++;
    }
    
    return result;
    
}

function getMinTime(time) {
    const hour = Math.floor(time / 100);
    const min = time % 100;
    return hour * 60 + min;
}