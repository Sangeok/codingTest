function solution(strings, n) {
    let charObjArr = [];
    
    for(let i = 0; i<strings.length; i++) {
        let strArr = strings[i].split('');
        let char = strArr[n];
        
        let charObj = {
            id : i,
            str : strings[i],
            char,
        }
        charObjArr.push(charObj);
    }

    charObjArr.sort((a,b) => {
        if(a.char === b.char) {
            return a.str.localeCompare(b.str);
        }
        else {
            return a.char.localeCompare(b.char);
        }
    })
    
    return charObjArr.map((item) => item.str);
}