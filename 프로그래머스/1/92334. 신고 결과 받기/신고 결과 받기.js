function solution(id_list, report, k) {
    let result = []
    const reportSet = new Set(report);
    const newReport = [...reportSet]
    
    let reportObj = {};
    const idMap = new Map();
    
    for(let id of id_list) {
        idMap.set(id, 0);
    }
    
    // console.log("idMap", idMap)
    
    for(let reportData of newReport) {
        let [user, reportedUser] = reportData.split(" ");
        reportObj[reportedUser] = (reportObj[reportedUser] + 1) || 1;
    }
    
    for(let reportData of newReport) {
        let [user, reportedUser] = reportData.split(" ");
        if(reportObj[reportedUser] >= k) {
            let userCount = idMap.get(user);
            idMap.set(user, userCount + 1);
        }
    }
    
    for(const [key, value] of idMap) {
        result.push(value)
    }
    
    return result;
    
    
}