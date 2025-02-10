function solution(strings, n) {
    let popStringArr = [];
    let result = [];
    
    for(let i = 0; i<strings.length; i++) {
        let popString = strings[i].split('')[n];
        const obj = {
            char : popString,
            index : i,
            str : strings[i]
        }
        popStringArr.push(obj);
    }
    
    popStringArr.sort((a,b) => {
        if(a.char === b.char) {
            return a.str.localeCompare(b.str);
        }
        else {
            return a.char.localeCompare(b.char);
        }
    });
    
    popStringArr.map((item) => result.push(item.str));
    
    return result;
}