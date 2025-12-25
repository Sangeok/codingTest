function solution(today, terms, privacies) {
    let result = [];
    let termObj = {};
    
    for(let term of terms) {
        const termChar = term.split(" ")[0];
        const expire = term.split(" ")[1];
        
        termObj[termChar] = expire;
    }
    
    const currentDayNum = dateTodayNum(today);
    
    privacies.forEach((privacie, index) =>{
        let privacieDay = privacie.split(" ")[0];
        let privacieChar = privacie.split(" ")[1];
        
        let privacieDayNum = dateTodayNum(privacieDay);
        let expireDayNum = monthTodayNum(termObj[privacieChar]);
        
        if(privacieDayNum + expireDayNum <= currentDayNum) {
            result.push(index+1);
        }
    })
    
    return result
}

function monthTodayNum(month) {
    return (month * 28);
}

function dateTodayNum(date) {
    const year = Number(date.split(".")[0]);
    const month = Number(date.split(".")[1]);
    const day = Number(date.split(".")[2]);

    return (year * 12 * 28) + (month * 28) + day;
}

