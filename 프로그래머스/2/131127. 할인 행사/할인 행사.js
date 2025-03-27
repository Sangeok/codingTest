function solution(want, number, discount) {
    let obj = {};
    for(let i = 0; i<want.length; i++) {
        obj[want[i]] = number[i];
    }

    let count = 0;
    let obj2 = {};
    for(let i = 0; i<discount.length-9; i++) {
        for(let j = i; j<i+10; j++) {
            obj2[discount[j]] = (obj2[discount[j]] || 0) + 1;
        }
        
        let check = true
        for(let key of Object.keys(obj2)) {
            if(obj[key] === undefined) check = false;
            
            if(obj2[key] > obj[key]) {
                check = false;
            }
        }
        
        if(check) count++;
        obj2 = {};
    }
    
    return count;
}