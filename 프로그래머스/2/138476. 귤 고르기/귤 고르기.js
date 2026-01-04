function solution(k, tangerine) {
    let obj = {}
    let arr = [];
    
    let result = 0;
    let currentCount = 0;
    
    for(let i of tangerine) {
        obj[i] = (obj[i] + 1) || 1;
    }
    
    for(let [key, value] of Object.entries(obj)) {
        let newArr = [key, value];
        arr.push(newArr);
    }
    
    arr.sort((a,b) => {
        return b[1] - a[1];
    })
    
    for(let i = 0; i<arr.length; i++) {
        currentCount = currentCount + arr[i][1];
        result = result + 1;
        
        if(currentCount >= k) {
            break;
        }
    }
    
    return result;
    
    
}

// 서로 다른 종류의 귤을 최소화 하고 싶으면 개수가 많은 순서대로 1개의 박스에 넣으면 됨.
