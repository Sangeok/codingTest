// function solution(strings, n) {
//     let popStringArr = [];
//     let result = [];
    
//     for(let i = 0; i<strings.length; i++) {
//         let popString = strings[i].split('')[n];
//         const obj = {
//             char : popString,
//             index : i,
//             str : strings[i]
//         }
//         popStringArr.push(obj);
//     }
    
//     popStringArr.sort((a,b) => {
//         if(a.char === b.char) {
//             return a.str.localeCompare(b.str);
//         }
//         else {
//             return a.char.localeCompare(b.char);
//         }
//     });
    
//     popStringArr.map((item) => result.push(item.str));
    
//     return result;
// }

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