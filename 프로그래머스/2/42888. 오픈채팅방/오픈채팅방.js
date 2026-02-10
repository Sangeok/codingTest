function solution(record) {
    let finalUserName = new Map();
    let result = [];
    
    for(let i = 0; i<record.length; i++) {
        let [behave, id, name] = record[i].split(" ");
        
        if(behave === "Change" || behave === "Enter") {
            finalUserName.set(id, name);
        }
    }
    
    for(let i = 0; i<record.length; i++) {
        let [behave, id, name] = record[i].split(" ");
        let str = "";
        
        let changedName = finalUserName.get(id);
        
        if(changedName) name = changedName;
        
        if(behave === "Enter") {
            str = `${name}님이 들어왔습니다.`;
            result.push(str);
        } else if(behave === "Leave") {
            str = `${name}님이 나갔습니다.`;
            result.push(str);
        }
    }
    
    return result;
    
}