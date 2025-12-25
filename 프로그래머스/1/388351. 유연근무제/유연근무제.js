function solution(schedules, timelogs, startday) {
    let result = 0;
    
    for(let i = 0; i<timelogs.length; i++) {
        let count = 0;
        let currentStartDay = startday;
        let currentSchedule = schedules[i];
        for(let k = 0; k<timelogs[i].length; k++) {
            let currentTimelog = timelogs[i][k];
            currentStartDay = currentStartDay % 7;
            let NoWorkDay = currentStartDay === 6 || currentStartDay === 0;
            
            if(calTime(currentSchedule+10) >= currentTimelog && !NoWorkDay) {
                count++;
            }
            currentStartDay = currentStartDay + 1;
        }
        
        if(count === 5) result++;
    }
    
    return result;
    
}

function calTime(time) {
    if (time % 100 >= 60) {
        const min = time % 100 - 60;
        const hour = Math.floor(time / 100) + 1;
        return hour * 100 + min; 
    }
    return time;
}