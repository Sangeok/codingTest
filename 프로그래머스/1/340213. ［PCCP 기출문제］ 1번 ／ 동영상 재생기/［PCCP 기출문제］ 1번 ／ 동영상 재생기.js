function solution(video_len, pos, op_start, op_end, commands) {
    pos = getSec(pos);
    op_end = getSec(op_end);
    op_start = getSec(op_start);
    
    if(pos >= op_start && pos<=op_end) pos = op_end;
    
    for(let command of commands) {
        let newTime = 0;
        if(command === "next") {
            newTime = onNext(pos, video_len);
            if(op_start <= newTime && newTime <= op_end) {
                pos = op_end;
            } else pos = newTime;
        } else if(command === "prev") {
            newTime = onPrev(pos);
            if(op_start <= newTime && newTime <= op_end) {
                pos = op_end;
            } else pos = newTime;
        } 
    }
    
    return getTime(pos)
}

function getTime(second) {
    const min = Math.floor(second / 60).toString().padStart(2, "0");
    const sec = (second % 60).toString().padStart(2, "0");
    
    return min + ":" + sec;
}


function onNext(time, videoLen) {
    let newTime = time + 10;
    let endTime = getSec(videoLen);
    
    if(newTime > endTime) return endTime
    else return newTime;
}

function onPrev(time) {
    let newTime = time - 10;
    
    if(newTime < 0) return 0;
    else return newTime;
}

function getSec(time) {
    const [min, sec] = time.split(":");
    return Number(min) * 60 + Number(sec);
}